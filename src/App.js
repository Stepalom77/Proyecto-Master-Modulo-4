import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';

const postsList = [
  {
    id: 1,
    image: "/img/cliff-ocean.jpg",
    autor: "ste",
    createdAt: 2,
    text: "Este es mi mi primer post, una foto que tome en mi último viaje.",
    comments: 5,
  },
  {
    id: 2,
    image: "/img/sorrento-italy.jpg",
    autor: "user",
    createdAt: 15,
    text: "En Sorrento, Italia.",
    comments: 77,
  },
  {
      id: 3,
      image: "/img/paris.jpg",
      autor: "palomino",
      createdAt: 30,
      text: "La Torre Eiffel en París",
      comments: 220,
    },
];

const profile = {
  avatar: "/img/Stephano.jpg",
  username: "stephano",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState("Loading...")
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postListHidden, setPostListHidden] = useState(false);
  const [searchBarHidden, setSearchBarHidden] = useState(false);
  const [profileHidden, setProfileHidden] = useState(true);
  const [profileData, setProfileData] = useState({})

  const handleSearch = () => {
    const searchedPosts = posts.filter(post => post.text.toLowerCase().includes(search.toLowerCase()));
    setFilteredPosts(searchedPosts)
    console.log(filteredPosts)
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const onLogoClick = () => {
    setSearch('');
    setFilteredPosts([]);
    setProfileHidden(true)
    setPostListHidden(false)
    setSearchBarHidden(false)
  }

  const postListHiddenState = () => {
    setPostListHidden(true)
    setSearchBarHidden(true)
    setProfileHidden(false)
  };

  useEffect(() => {
    const postsTimer = setTimeout(() => {
      setPosts(postsList)
    }, 3000)
    setProfileData(profile)
    return () => clearTimeout(postsTimer);
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
      <PostList posts={postList} hiddenPostListState={postListHidden} />
      <Profile avatar={profileData.avatar} username={profileData.username} bio={profileData.bio} hiddenProfileState={profileHidden}/>
    </div>
  );
}

export default App;
