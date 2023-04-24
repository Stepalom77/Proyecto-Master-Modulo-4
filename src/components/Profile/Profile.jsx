import './Profile.css'

const Profile = ({avatar, username, bio, hiddenProfileState, logOut}) => {

    return(
        <div className="container-fluid" hidden={hiddenProfileState}>
            <div className="d-flex justify-content-center">
                <div className="card mb-3" id='card-post' >
                    <img src={ process.env.PUBLIC_URL + avatar} className="card-img-top" id='image-post' alt="imagen"/>
                    <div className="card-body text-center">
                        <h5 className="card-title"> @{username}</h5>
                        <p className="card-text"> {bio} </p>
                        <button type='button' className="btn btn-danger" onClick={logOut}>Salir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile