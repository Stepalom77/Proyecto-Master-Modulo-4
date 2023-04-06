import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

const Post = ({ imagePath, username, likes, time, description, numComments }) => {
    return(
        <div className="card mb-3" id='card-post'>
            <img src={ process.env.PUBLIC_URL + imagePath} className="card-img-top" id='image-post' alt="imagen"/>
            <div className="card-body">
                <div className="row d-flex justify-content-evenly">
                    <div className="col d-flex justify-content-start">
                    <h6 class="card-subtitle mb-2 text-muted"> {time}min ago </h6>
                    </div>
                    <div className="col d-flex justify-content-end">
                    <button type="button" class="btn btn-danger btn-sm"> 
                        <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} /> {likes}k 
                    </button>
                    </div>
                </div>
                <h5 className="card-title"> @{username}</h5>
                <p className="card-text"> {description} </p>
                <p className='card-text'> 
                <FontAwesomeIcon icon={faComment} /> Comments ({numComments}) 
                </p>
            </div>
        </div>
    )
}

export default Post