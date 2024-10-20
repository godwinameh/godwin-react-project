import { Outlet } from 'react-router-dom'
import './Layout.css'
import NavBar from '../Components/NavBar/NarBar'


const Layout = () => {
  return (
    <div>
        <NavBar/>
        <main className='content-container'>
        <Outlet/>
        </main>
    </div>
  )
}

export default Layout