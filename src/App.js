import './App.css';
import NavBar from './components/NavBar/NavBar';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <PostList/>
    </div>
  );
}

export default App;
