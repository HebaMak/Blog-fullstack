import { useEffect , useState , useContext} from 'react';
import { Link , useLocation } from "react-router-dom";
import { Context } from '../../context/Context';
import axios from 'axios';
import "./singlePost.css";

const SinglePost = () => {
  const {user} = useContext(Context)
  const PF = 'http://localhost:5000/images/'
  
  const location= useLocation()
  const path = location.pathname.split('/')[2]
  
  const [post , setPost] = useState({})
  const [title , setTitle] = useState("")
  const [desc , setDesc] = useState("")
  const [updateMode , setUpdateMode] = useState(false)


  useEffect(()=> {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${path}`)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost()
  } , [path])


  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}` ,  {data:{username:user.username}})
      window.location.replace('/')
    }
    catch(err){console.log(err)}
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}` , {
        username:user.username,
        title,
        desc })
      setUpdateMode(false)
      // window.location.reload()
    }
    catch(err){console.log(err)}
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo && ( <img
            className="singlePostImg"
            src={PF + post.photo}
            alt="singlepost image"/> )
        }
        {
          updateMode ? 
            (<input 
                  type='text' 
                  value={title} 
                  className="singlePostTitleInput" 
                  autoFocus 
                  onChange={e=>setTitle(e.target.value)}
            />) :
            (<h1 className="singlePostTitle">
              {title}
              {
                post.username === user?.username &&
                  <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                  </div>
              }
            </h1>)
        }
        <div className="singlePostInfo">
          <span> Author: 
            <Link to={`/?user=${post.username}`}>
              <b className="singlePostAuthor"> {post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? 
          (<textarea className="singlePostDescInput" value={desc} onChange={e=>setDesc(e.target.value)}/>):
          (<p className="singlePostDesc">{desc}</p>)
        }
        {updateMode && <button className='singlePostButton' onClick={handleUpdate}>Update</button>}
      </div>
    </div>
  );
}

export default SinglePost