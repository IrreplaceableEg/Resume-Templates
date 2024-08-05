import React from 'react'
import Header from '../Header/Header'
import {useNavigate,useLocation} from 'react-router-dom'
// import '../Templates/Templates.css'
 


function Templates() {
  const navigate = useNavigate();
const location =useLocation();
console.log(location);

  // const clsName= [{id:0,clasname: "firsttemp"}, {id:1,clasname: "secondtemp"} ,{id:2,clasname:"thirdtemp" }, {id:3,clasname:"fourtemp"}];

//   let pink='';
// let blue='';
// let green='0';

const colorArr=[{id:0,color:'bg-pink-600'},{id:1,color:'bg-blue-600'},{id:2,color:'bg-green-600'},{id:2,color:'bg-yellow-600'}];



let dbName=localStorage.getItem('userName')
let dbEmail=localStorage.getItem('email');
let dbQualification=localStorage.getItem('qualification');
let dbPostion =localStorage.getItem('postion');



function clssName(e){

  let clname = e.target.className;
  console.log(clname)
  navigate('/resume',{state:{clname:clname}})
  // console.log(navigate.state);

} 


// function prevPage(){
//   navigate('/details');

// }

  return (
    <div>
      <Header></Header>
      <div className='container    bg-[#e5f4f7] w-[100vw] h-[92vh]  '>

      <div>
      {/* <button className='w-[100px] h-[30px] text-center ml-3 bg-white hover:bg-[#ACC8E5] text-[#264653]  border border-slate-300 rounded-md '  onClick={prevPage}>  ❮ Previous</button> */}
      </div>

      <h1 className='temph1 font-serif text-2xl pt-7  text-blue-600  flex  justify-center items-center '> Resume Templates </h1>


       <div className='card  flex max-[768px]:flex-wrap max-[768]:item-center '>

       {
      colorArr.map((item)=>{
        return(
        // <  div className={item.clasname + ' bg-green-700'} onClick={clssName} key={item.id}>
         
        <div className={item.color +' w-[500px] h-[215px] m-8 p-8 rounded-md'} onClick={clssName} key={item.id}>
         <h3> Your Name is {dbName}</h3>
        <h3>Your Email  is {dbEmail}</h3>
        <h3>Your qualification {dbQualification}</h3>
        <h3>Your Postion  {dbPostion}</h3>          
       </div>
        
        )

      })
    }

  </div>
</div>
      
    </div>
  )
}

export default Templates
