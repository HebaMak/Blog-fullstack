import { useState  , useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import './homepage.css'

const Homepage = () => {

  const {search} = useLocation() 
  const [posts , setPosts] = useState([])
  
  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${search}`)
      setPosts(res.data)
    }
    fetchPosts()
  } , [search])

  return (
    <>
      <Header/>
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}

export default Homepage


