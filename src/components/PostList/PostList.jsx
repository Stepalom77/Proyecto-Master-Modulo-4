import Post from '../Post/Post';
import './PostList.css'

const posts = [
    {
      id: 1,
      imagePath: "/img/cliff-ocean.jpg",
      username: "ste",
      likes: 10,
      time: 2,
      description: "Este es mi mi primer post, una foto que tome en mi último viaje.",
      numComments: 5,
    },
    {
      id: 2,
      imagePath: "/img/sorrento-italy.jpg",
      username: "user",
      likes: 90,
      time: 15,
      description: "En Sorrento, Italia.",
      numComments: 77,
    },
    {
        id: 3,
        imagePath: "/img/paris.jpg",
        username: "palomino",
        likes: 45,
        time: 30,
        description: "La Torre Eiffel en París",
        numComments: 220,
      },
  ];

const PostList = () => {
    return(
        <div className="container-fluid">
                {posts.map((post) => (
                    <div className='d-flex justify-content-center '>
                        <Post
                        key={post.id}
                        imagePath={post.imagePath}
                        username={post.username}
                        likes={post.likes}
                        time={post.time}
                        description={post.description}
                        numComments={post.numComments}
                    />
                    </div>
                ))}
        </div>
    )
}

export default PostList