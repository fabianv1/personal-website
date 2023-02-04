import './navbar.scss'
import { useLocation } from 'wouter'

const BASE_PATH = '/personal-website'

export const Navbar = () => {
  const [,setLocation] = useLocation()

  return (
    <nav className="navbar">
      <h1 className='navbar-title' onClick={()=>{setLocation(`${BASE_PATH}/`)}}>Fabian Velasquez</h1>
      <div className="navbar-item-container">
        <p className="navbar-items" onClick={()=>{setLocation(`${BASE_PATH}/about`)}}>About</p>
        <p className="navbar-items" onClick={()=>{setLocation(`${BASE_PATH}/projects`)}}>Projects</p>
        <p className="navbar-items" onClick={()=>{setLocation(`${BASE_PATH}/work-experiences`)}}>Work Experiences</p>
        <div className="navbar-links">
            
        </div>
      </div>
    </nav>
  )
}