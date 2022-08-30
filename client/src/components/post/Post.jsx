import { Link } from "react-router-dom";
import "./post.css";

const Post = ({post}) => {
  const {_id, desc, photo, title, createdAt, categories} = post
  const date = new Date(createdAt).toDateString()
  const PF = 'http://localhost:5000/images/'

  return (
    <div className="post"> 
      {
        photo && ( <img
            className="postImg"
            src= {PF+ photo} 
            alt="post image" />)
      }
      <div className="postInfo">
        <div className="postCats"> 
          {
            categories.map(cat => (
              <span className="postCat">{cat.name}</span>
            ))
          }
        </div>
        <Link to={`/post/${_id}`}>
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc"> {desc} </p>
    </div>
  );
}

export default Post