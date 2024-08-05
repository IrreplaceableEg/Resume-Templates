import React, { useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import Style from "../Header/Header.module.css"
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

function Header() {

  const location=useLocation();
  console.log(location);

const [threedot,setThreeDot] =useState(false); 
  const navigate=useNavigate();
 
   
  // console.log(location.state.prevloc)
  // const prevloc=location.state.prevloc


  // const email=localStorage.getItem('email');
     
  function handleLogout(){
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }


function handleThreeDot(){
  setThreeDot(!threedot);


}
  
  return (
    <nav className={Style.navbar}>
 
      <div className={Style.navbarLeft}>
 
      <button className={Style.backBtn} onClick={()=>navigate(-1)}>❮</button>      
      <img  className={Style.img} src='https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt2_1200x303.png?sfvrsn=3ddeaf3b_2'></img>
       <h1 className={Style.h1}>Resume</h1>

      </div >


      <div className={Style.navbarRight}>

      <div className='threeDotContainer'>

      <p className={Style.cross} onClick={handleThreeDot}>  {threedot?  <BsThreeDotsVertical/>:<BsThreeDotsVertical/>}</p>
      </div>

       
          
        <div className={threedot? Style.menu:Style.inactive}>
       
          <ul>
          <li>Profile </li>
          <li>Setting </li>
          <li>   
              <button onClick={handleLogout}>
              Logout
              </button>
            </li>
          </ul>
           </div>

        </div>
         
      
       
      
      </nav>
  )
}

export default Header
