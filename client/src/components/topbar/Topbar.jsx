import { useContext } from 'react';
import {Link , NavLink} from 'react-router-dom'
import { Context } from '../../context/Context';
import './topbar.css'

const Topbar = () => {
  const {user, dispatch} = useContext(Context)
  const PF =  "http://localhost:5000/images/"
  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    window.location.replace('/login')
  };

  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcon face fab fa-facebook-square"></i>
        <i className="topIcon inst fab fa-instagram-square"></i>
        <i className="topIcon pint fab fa-pinterest-square"></i>
        <i className="topIcon twit fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><NavLink to='/'>HOME</NavLink></li>
          <li className="topListItem"><NavLink to='/about'>ABOUT</NavLink></li>
          <li className="topListItem"><NavLink to="/write">WRITE</NavLink></li>
        </ul>
      </div>
      <div className="topRight">
        
        {user ? (
          <Link to="/settings">
            <img
                className="topImg"
                src={ user.profilePic ? PF + user.profilePic : PF + 'noAvatar.png'}
                alt="profile Img"
              />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">Login</Link>
            </li>
            <li className="topListItem">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        <span className="topbarRight">{user && user.username}</span>
        <span className="topbarRight logout" onClick={handleLogout}>{user && "logout"}</span>
      </div>
    </div>
  );
}


export default Topbar