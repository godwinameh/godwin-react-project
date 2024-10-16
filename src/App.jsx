import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/HomePage/Home'
import AboutUs from './Pages/AboutPage/AboutUs'
import AccountOpeningForm from './Pages/AccountOpeningForm/AccountOpeningForm'






const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element:<AboutUs/>
      },
      {
        path:'/accountopeningform',
        element:<AccountOpeningForm/>
      }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
