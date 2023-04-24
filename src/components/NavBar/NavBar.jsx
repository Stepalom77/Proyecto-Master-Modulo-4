import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBolt } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({onLogoClick, onProfileClick}) => {
    return(
        <nav className="navbar navbar-expand-lg bg-light mb-2">
            <div className="container-fluid">
                <button className="navbar-brand border border-0 bg-transparent" onClick={onLogoClick} > <FontAwesomeIcon icon={faBolt} /> three pics</button>
                <button className="btn border border-0" type="button" onClick={onProfileClick} >
                    <FontAwesomeIcon icon={faCircleUser} />
                </button>
            </div>
        </nav>
    )
}

export default NavBar