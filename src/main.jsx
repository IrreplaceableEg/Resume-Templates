import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 
 
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Details from './component/Details/Details.jsx'
import Templates from './component/Templates/Templates.jsx'
import Resume from './component/Reusme/Resume.jsx'
import Login from './component/Login/Login.jsx'
import Signup from './component/SignUp/Signup.jsx'
import Header from './component/Header/Header.jsx'
import ProtectedRoutes from './component/ProtectedRoute/ProtectedRoutes.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    
    
    <Route path='/' element={<Layout/>}> 
      <Route path='/' element={<ProtectedRoutes/>}>
      <Route path='/Header' element={<Header/>}/>

      <Route path='/Details' element={<Details/>}/>
      <Route path='/Templates' element={<Templates/>}/>
      <Route path='/Resume' element={<Resume/>}/>

      </Route> 


      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<Signup/>}/>
      
 
    </Route>

  )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
