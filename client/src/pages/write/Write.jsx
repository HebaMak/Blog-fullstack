import { useState , useContext } from "react";
import { Context } from "../../context/Context";
import axios from 'axios';
import "./write.css";

const Write = () => {
  
  const {user} = useContext(Context)
  const [title , setTitle] = useState("")
  const [desc , setDesc] = useState("")
  const [file , setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost={
      username: user.username,
      title,
      desc
    }
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name 
      data.append("name" , filename)
      data.append("file" , file)
      newPost.photo = filename

      try {
        await axios.post('http://localhost:5000/api/upload' , data)
      }
      catch(err){console.log(err)}
    }

    try {
      const res = await axios.post('http://localhost:5000/api/posts' , newPost)
      window.location.replace(`/post/${res.data._id}`)  // go to singlePost page
      // window.location.replace('/')  // go to home page
    }
    catch(err){console.log(err)}
  }

  return (
    <div className="write">
      {
        file && (<img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="write image"
        />)
      }
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
            id="fileInput" 
            type="file" 
            className='inputFile'
            onChange={e=>setFile(e.target.files[0])}
            />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            autoFocus={true}
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit"> Publish </button>
      </form>
    </div>
  );
}

export default Write