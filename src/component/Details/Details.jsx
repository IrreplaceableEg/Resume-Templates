import React, { useState } from 'react'
import {useNavigate ,useLocation} from 'react-router-dom';
import Header from '../Header/Header';

 

function Details() {
const location = useLocation();
// console.log(location.state.prevloc);
console.log(location.pathname);
  
  const navigate=useNavigate();
   
  const email=localStorage.getItem('email');
  // const [qualificationError,setQualificationError]=useState('');

   
  const [enteredValue,setEnteredValue] =useState({

    username:"",
    email:"",
    qualification:"",
    position:"",
 

  })

  const [didEdit,setDidEdit] =useState({
    username:false,
    email:false,
    qualification:false,
    position:false,
     
  });


  // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;

  const usernameRegex=/^[a-zA-Z0-9]+$/;
  // const usernameRegex=/^[0-9A-Za-z]{6,16}$/;
  const positionRegex=/^[a-zA-Z0-9]+$/;

  // const isEmailInValid=  didEdit.email && !emailRegex.test(enteredValue.email);
   const isUserNameInValid = didEdit.username && !usernameRegex.test(enteredValue.username);
     const isPositionInValid = didEdit.position && !positionRegex.test(enteredValue.position);
    const isQualificationInValid = didEdit.qualification && enteredValue.qualification === "";
    
 

 
console.log(enteredValue.qualification);


     function handleInputChange(identifier,value){
      setEnteredValue((prevalues)=>({
        ...prevalues,
        [identifier]:value,
  
      }));
  
      setDidEdit((prevalues)=>({
        ...prevalues,
        [identifier]:false,
      }))
  
  
     }

    
  function handleInputBlur(identifier){
    setDidEdit((prevalues)=>({
      ...prevalues,
      [identifier]:true,
    }));

   }

 
 

// // function fro validate qualification 

// function validateQualification(qualification){
//   let isQualificationValid=true;
//   setQualificationError('');

//   if(qualification==='B.Tech' || qualification=== 'M.Tech'){
//     setQualificationError('');
//   }
//   else{
//     isQualificationValid=false;
//     setQualificationError('please chose the Qualification');

//   }

//   return isQualificationValid;

// }




function handleDetails(event){
  event.preventDefault();
  
   
  
  // if(enteredValue.username === "" && enteredValue.position === "" && enteredValue.qualification === ""){
     
  //   alert('please fill the details');
  //   return
 
  // }
  
if(enteredValue.username === ""){
  alert('please fill the details');
   
  return
  
}

if(enteredValue.qualification === ""){
  alert('please fill the details');
   
  return
  
}

if(enteredValue.position === ""){
  alert('please fill the details');
   
  return
  
}


  
  if(!isPositionInValid && !isUserNameInValid && !isQualificationInValid){

    localStorage.setItem("qualification",enteredValue.qualification)
    localStorage.setItem("userName",enteredValue.username);
    localStorage.setItem("postion",enteredValue.position);

    // console.log(`userName :${userName}`);
    // console.log(`postion :${postion}`);

    // console.log(`qualific :${qualification}`);

        navigate("/templates");
 
  }
   
   
 
}


// function prevPage(){
//   navigate('/login');

// }
 
  return (
    <div>
      <Header></Header>
      {/* <div className='h-[0] bg-[#e5f4f7]'>
      
      <button  className='w-[100px] h-[30px] text-center  ml-3 bg-white hover:bg-[#ACC8E5] text-[#264653]  border border-slate-300 rounded-md ' onClick={prevPage}> ❮ Previous</button>
      </div>
     */}
      <form onSubmit={handleDetails} className='topdiv flex justify-center items-center w-[100vw] h-[92vh] bg-[#e5f4f7] '>
        <div className='inner  w-[450px] h-[550px] bg-[#ACC8E5] flex flex-col rounded-md'>

         <h1 className=' font-serif text-2xl mt-7 text-center text-[#264653]'>User Details</h1>  

        <div className='form-gp form-gp flex flex-col   mt-5 w-[400px]'>   
            <label htmlFor='username' className='text-xl font-serif  text-[#264653]  ml-16'>Username</label>
            <input type='text' 
            id='username'
            name='username'
            onBlur={()=>handleInputBlur("username")}
             
            
             className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter username'
             onChange={(event)=>handleInputChange("username",event.target.value)}
            value={enteredValue.username}
            />
            {isUserNameInValid && <h6 className='error text-red-500  ml-16'>Please enter the valid Username</h6>}
 
        </div>

        <div className='form-gp  w-[400px]  flex flex-col'>   
            <label htmlFor='email' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Email</label>
            <input type='email' 
            id='email'
            name='email'
             value={email} className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm'
            // onChange={(e)=>setEmaill(e.target.value)}
            />
             
        </div>
 
         
        <div className='form-gp  w-[400px]  flex flex-col'>   
             <label htmlFor='qualification' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Qualification</label>
             <select id='qualification' 
             name='qualification'
             onBlur={()=> handleInputBlur("qualification")}
             value={enteredValue.qualification}
             className='w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm'

              onChange={(event)=> handleInputChange("qualification",event.target.value)}  >
               <option value=''>Select a Qualification </option>
               <option value='B.Tech'>B.Tech</option>
               <option value='M.Tech'>M.Tech</option>
               
               

        </select>
       
             {isQualificationInValid && <h6 h6 className='error text-red-500  ml-16'> Please select any one</h6>}
             {/* {isQualificationValid && <h6 h6 className='error text-red-500  ml-16'> {qualificationError}</h6>} */}

         </div> 

         <div className='form-gp w-[400px]  flex flex-col'>   
            <label htmlFor='position' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Position</label>
            <input type='text'
             id='position' 
             name='position'
             onBlur={() => handleInputBlur("position")}
             className='w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter Position'
             onChange={(event)=> handleInputChange("position",event.target.value)}
             value={enteredValue.position}
            />
            {isPositionInValid && <h6 className='error text-red-500  ml-16'>Please enter valid Position</h6>}

        </div>


        <div className='w-[400px] h-[30px] mt-4'> 

        <button
        disabled={(!isUserNameInValid && !isQualificationInValid && !isPositionInValid) ? false:true}
 
        className='btn disabled:opacity-70 w-[300px] h-[30px] text-center mt-2 ml-16  bg-blue-600  text-[#264653]  border border-slate-300 rounded-md ' type='submit'>Next</button>
       
        </div>
        </div>

      </form>
 
    </div>
  )
}

export default Details
