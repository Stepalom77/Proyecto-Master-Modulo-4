import Post from '../Post/Post';
import './PostList.css'

const PostList = ({posts, hiddenPostListState}) => {
    return(
        <div className="container-fluid" hidden={hiddenPostListState}>
                { Array.isArray(posts) ? (posts.map((post) => (
                    <div className='d-flex justify-content-center' key={post.id}>
                        <Post
                        image={post.image}
                        author={post.author}
                        createdAt={post.createdAt}
                        text={post.text}
                        comments={post.comments}
                    />
                    </div>
                ))) : (
                    <div className='d-flex justify-content-center'>
                        <p>Loading...</p>
                    </div>
                  ) }
        </div>
    )
}

export default PostList