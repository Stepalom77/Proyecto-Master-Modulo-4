import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBolt } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'> <FontAwesomeIcon icon={faBolt} /> three pics</a>
                <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" 
                 aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faCircleUser} />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"  href='/'>Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar