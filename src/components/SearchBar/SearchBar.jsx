import './SearchBar.css'

const SearchBar = ({value, onSearch, hiddenSearchState}) => {
    return(
        <nav className="navbar mb-2" hidden={hiddenSearchState} >
        <div className="container-fluid d-flex justify-content-center ">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={onSearch}/>
          </form>
        </div>
      </nav>
    )
}

export default SearchBar