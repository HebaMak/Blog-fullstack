import { useContext } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Homepage from './pages/homepage/Homepage.jsx'
import About from './pages/about/About';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ContextProvider, { Context } from './context/Context';
import './App.css';


const App = () => {
  const {user} = useContext(Context)
  
  return (
    <ContextProvider>
      <Router>
        <Topbar />
        <Routes> 
          <Route path='/' element={user ? <Homepage /> : <Register />} /> 
          <Route path='/posts' element={user ? <Homepage /> : <Register />} />
          <Route path='/settings' element={user ? <Settings /> : <Register />} />
          <Route path='/write' element={user ? <Write/>: <Register />} />
          <Route path='/login' element={user ? <Homepage /> : <Login />} />
          <Route path='/register' element={user ? <Homepage/> : <Register />} />

          <Route path='/about' element={user ? <About/> : <Register />} />

          <Route path='/post/:postId' element={<Single />} />
          <Route path='*' element={user ? <Homepage /> : <Login />} />
        </Routes>
      </Router>  
    </ContextProvider>
  );
}

export default App;
