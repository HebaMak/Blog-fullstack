import { useState , useContext } from "react";
import { Context } from "../../context/Context";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from 'axios';
import "./settings.css";

const Settings = () => {
  const {user , dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  
  const [file , setFile] = useState(null)
  const [username , setUsername] = useState(user && user.username)
  const [email , setEmail] = useState(user && user.email)
  const [password , setPassword] = useState(user && user.password)
  const [success , setSuccess] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: "UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username, 
      email,
      password
    }
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name 
      data.append("name" , filename)
      data.append("file" , file)
      updatedUser.profilePic= filename

      try {
        await axios.post('http://localhost:5000/api/upload' , data)
      }
      catch (err) {
        console.log(err)
      }
    }
    
    try {
      const res = await axios.put(`http://localhost:5000/api/users/${user._id}` , updatedUser)
      setSuccess(true)
      dispatch({type: "UPDATE_SUCCESS" , payload: res.data})
    }
    catch(err){
      dispatch({type: "UPDATE_FAILURE"})
    }
  }

  const deleteUserHandler = async () => {
    try { 
      await axios.delete(`http://localhost:5000/api/users/${user._id}`, {data:{userId:user._id}})
      dispatch({type: "LOGOUT"})
      window.location.replace('/register')
    }
    catch(err){console.log(err)}
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={deleteUserHandler}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={user ? (file ? URL.createObjectURL(file) : PF+ (user.profilePic ||'noAvatar.png')) : PF+'noAvatar.png'}
              alt="setting image"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              type="file"
              id="fileInput"
              className="settingsPPInput"
              onChange={(e) =>setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input 
            type="text" 
            name="name"
            placeholder={user && user.username} 
            onChange={e=>setUsername(e.target.value)}
            />
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            placeholder={user && user.email}
            onChange={e=>setEmail(e.target.value)}
            />
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            name="password"
            onChange={e=>setPassword(e.target.value)}
          />
            <button className="settingsSubmitButton" type="submit"> Update </button>
            { success && <span className="successUpdate">Upadated Success</span> }
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings