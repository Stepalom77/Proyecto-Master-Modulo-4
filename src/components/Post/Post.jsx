import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Post = ({ image, autor, createdAt, text, comments }) => {

    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(likes + 1);
      }

    return(
        <div className="card mb-3" id='card-post'>
            <img src={ process.env.PUBLIC_URL + image} className="card-img-top" id='image-post' alt="imagen"/>
            <div className="card-body">
                <div className="row d-flex justify-content-evenly">
                    <div className="col d-flex justify-content-start">
                    <h6 className="card-subtitle mb-2 text-muted"> {createdAt}min ago </h6>
                    </div>
                    <div className="col d-flex justify-content-end">
                    <button type="button" className="btn btn-danger btn-sm" onClick={handleClick} > 
                        <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} /> {likes}k 
                    </button>
                    </div>
                </div>
                <h5 className="card-title"> @{autor}</h5>
                <p className="card-text"> {text} </p>
                <p className='card-text'> 
                <FontAwesomeIcon icon={faComment} /> Comments ({comments}) 
                </p>
            </div>
        </div>
    )
}

export default Post