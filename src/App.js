import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';

const apiUrl = 'https://three-points.herokuapp.com/api'

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState("Loading...");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchBarHidden, setSearchBarHidden] = useState(true);
  const [profileData, setProfileData] = useState({});
  const [loginOk, setLoginOk] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

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
      navigate('/')
    }
  }

  const onProfile = () => {
    if(loginOk) {
      navigate('/profile')
    }
  }

  const onLogin = () => {
    setLoginOk(true)
    setSearchBarHidden(false)
    navigate('/')
  }

  const logOut = () => {
    localStorage.removeItem('token')
    setLoginOk(false)
    setSearchBarHidden(true)
  }

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(localStorage.getItem('token'));
    };
    if(token) {
      setLoginOk(true)
      navigate('/')
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
    } else {
      navigate('/login')
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
      <NavBar onLogoClick={onLogoClick} onProfileClick={onProfile} />
      <SearchBar value={search} onSearch={handleChange} hiddenSearchState={searchBarHidden} />
      <Routes>
        <Route path="/" element={<PostList posts={postList} />} />
        <Route path="/login" element={<Login onLoginComplete={onLogin} />} />
        <Route path="/profile" element={<Profile avatar={profileData.avatar} username={profileData.username} bio={profileData.bio} logOut={logOut} />} />
      </Routes>
    </div>
  );
}

export default App;
