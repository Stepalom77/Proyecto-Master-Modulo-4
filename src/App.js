import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import axios from 'axios';

const apiUrl = 'https://three-points.herokuapp.com/api'

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState("Loading...");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postListHidden, setPostListHidden] = useState(true);
  const [searchBarHidden, setSearchBarHidden] = useState(true);
  const [profileHidden, setProfileHidden] = useState(true);
  const [loginHidden, setLoginHidden] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [loginOk, setLoginOk] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))

  const handleSearch = () => {
    const searchedPosts = posts.filter(post => post.text.toLowerCase().includes(search.toLowerCase()));
    setFilteredPosts(searchedPosts)
    console.log(filteredPosts)
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const onLogoClick = () => {
    if(loginOk) {
      setSearch('');
      setFilteredPosts([]);
      setProfileHidden(true)
      setPostListHidden(false)
      setSearchBarHidden(false)
    }
  }

  const postListHiddenState = () => {
    if(loginOk) {
      setPostListHidden(true)
      setSearchBarHidden(true)
      setProfileHidden(false)
    }
  };

  const onLogin = () => {
    setLoginOk(true)
    setLoginHidden(true)
    setPostListHidden(false)
    setSearchBarHidden(false)
  }

  const logOut = () => {
    localStorage.removeItem('token')
    setLoginOk(false)
    setLoginHidden(false)
    setPostListHidden(true)
    setSearchBarHidden(true)
    setProfileHidden(true)
  }

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(localStorage.getItem('token'));
    };
    if(token) {
      setLoginOk(true)
      setLoginHidden(true)
      setPostListHidden(false)
      setSearchBarHidden(false)
      const postsTimer = setTimeout(() => {
        axios.get(`${apiUrl}/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }, 3000);

      axios.get(`${apiUrl}/users/6136944fcd79ba24707e2f82`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setProfileData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
      return () => {
        clearTimeout(postsTimer); 
      }
    }

    window.addEventListener('storage', handleTokenChange);
    return () => {
      window.removeEventListener('storage', handleTokenChange);};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (search) {
      handleSearch();
    } else {
      setFilteredPosts([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const postList = filteredPosts.length ? filteredPosts : posts;

  return (
    <div className="App">
      <NavBar onLogoClick={onLogoClick} onProfileClick={postListHiddenState} />
      <SearchBar value={search}  onSearch={handleChange} hiddenSearchState={searchBarHidden} />
      <Login hiddenLoginState={loginHidden} onLoginComplete={onLogin}/>
      {<PostList posts={postList} hiddenPostListState={postListHidden} />}
      <Profile avatar={profileData.avatar} username={profileData.username} bio={profileData.bio} hiddenProfileState={profileHidden} logOut={logOut}/>
    </div>
  );
}

export default App;
