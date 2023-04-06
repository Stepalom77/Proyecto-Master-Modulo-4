import './SearchBar.css'

const SearchBar = () => {
    return(
        <nav className="navbar mb-2">
        <div className="container-fluid d-flex justify-content-center ">
          <form className="d-flex " role="search">
            <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

export default SearchBar