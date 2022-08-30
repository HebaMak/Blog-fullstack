import {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './sidebar.css'



const Sidebar = () => {

  const [categories , setCategories]= useState([])
  useEffect(()=> {
    const getCats= async () => {
      const res = await axios.get("http://localhost:5000/api/categories")
      setCategories(res.data)
    }
    getCats()
  },[])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://res.cloudinary.com/hapiii/image/upload/v1647033052/e7xqq55givaxwcrcvtfy.jpg"
          alt="sidebar img"
        />
        <p>
          Laboris sunt aute amet ex esse cupidatat velit Sunt eu magna velit ullamco dolore mollit
          ut nostrud quis id proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            categories.map(cat => (
              <Link to={`/?cat=${cat.name}`} key={cat._id}>
                <li className="sidebarListItem">{cat.name}</li> 
              </Link> ))
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon face fab fa-facebook-square"></i>
          <i className="sidebarIcon inst fab fa-instagram-square"></i>
          <i className="sidebarIcon pint fab fa-pinterest-square"></i>
          <i className="sidebarIcon twit fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar