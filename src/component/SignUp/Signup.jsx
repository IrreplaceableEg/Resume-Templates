 import React from 'react'
 import { useState } from 'react';
 import { NavLink } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
//  import "./Signup.css"
 
 import { TiEyeOutline} from "react-icons/ti";
 import { IoMdEyeOff } from "react-icons/io";

 function Signup() {

    const navigate =useNavigate();
    const[show,setShow]=useState(true);
    // const [Dis,setDis] =useState(true);

    const [enteredValue,setEnteredValue] =useState({

      username:"",
      email:"",
      password:"",
      confirmpassword:"",

    })

    const [didEdit,setDidEdit] =useState({
      username:false,
      email:false,
      password:false,
      confirmpassword:false,

    });

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const usernameRegex=/^[a-zA-Z0-9]+$/;

    const isEmailInValid=  didEdit.email && !emailRegex.test(enteredValue.email);
    const isUserNameInValid= didEdit.username && !usernameRegex.test(enteredValue.username);
    const isPasswordInValid=  didEdit.password && !passwordRegex.test(enteredValue.password)
    const isConfirmPasswordInValid =didEdit.confirmpassword && enteredValue.confirmpassword !== enteredValue.password

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
 




function handleSubmit(event){
     event.preventDefault();
  
    //   //  isUserNameValid=validateUserName(userName);
    //  let isEmailValid=validateEmail(email);
    // let isPassworsValid=validatePassword(password);
    // let isConfirmPasswordValid=validateConfimPassword(confirmpassword);


    if(enteredValue.username==='' && enteredValue.email==='' && enteredValue.password==='' && enteredValue.confirmpassword===''){
      alert('Please fill the form for Signup');
      return
    }
     
   if(!isUserNameInValid && !isEmailInValid &&  !isPasswordInValid && !isConfirmPasswordInValid){
  
        localStorage.setItem("username", enteredValue.username) 
       localStorage.setItem("email",enteredValue.email)
        localStorage.setItem("password",enteredValue.password)

        navigate("/login"); 

      console.log(`username:${userName}`);
      console.log(`Email:${email}`);
      
    }
  
    // else{
    //   // alert('form data is not correct');
    // }
   
 } 


  function handleClick(){
    setShow(!show);
 
  }
 

   return ( 

        <form   onSubmit={handleSubmit} /*noValidate*/  className='topdiv  w-[100vw] h-[100vh] flex justify-center items-center bg-[#e5f4f7]'>
            <div className='inner w-[450px] h-[620px] bg-[#ACC8E5] flex flex-col rounded-md'>
            <h1 className='font-serif text-2xl mt-7 text-center text-[#264653] '>Sign Up </h1>
    
        <div className='form-gp form-gp flex flex-col   mt-5 w-[400px] ' >   
            <label htmlFor='username' 
            className='text-xl font-serif  text-[#264653]  ml-16'>Username</label>
            <input type='text'
             id='username'
             name='username'
             onBlur={()=>handleInputBlur("username")}
             
             className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter Username'
 
            onChange={(event)=>handleInputChange("username",event.target.value)}
            value={enteredValue.username}

            />
            

            {isUserNameInValid && <h6 className='error text-red-500  ml-16 '>  Please Enter the valid username</h6>}

            
        </div>
        { <div className='form-gp  w-[400px]  flex flex-col'>   
            <label htmlFor='email' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Email</label>
            <input type='email'
             id='email'
             name='email'
             onBlur={()=>handleInputBlur("email")}
              className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter Email'
             
            onChange={(event)=>handleInputChange("email",event.target.value)}
            value={enteredValue.email}

            />
           
             {isEmailInValid  && <h6 className='error text-red-500  ml-16 '>Please enter valid Email</h6>}

        </div> }

        <div className='form-gp w-[400px]  flex flex-col'>   
            <label htmlFor='password' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Password</label>
            <input type='password'
             id='password'
             name='password'
             onBlur={()=>handleInputBlur("password")}

             
             className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter password'
             onChange={(event)=> handleInputChange("password",event.target.value)}
             value={enteredValue.password}
            />
             {isPasswordInValid && <h6 className='error  text-red-500  ml-16'>Please enter the strong Password</h6>}
        </div>



         <div className='form-gp form-gp w-[400px]  flex flex-col relative'>   
            <label htmlFor='confirmpassword' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Confirm Password</label>
 
            <input type={show ?"text":"password"}
            id='confirmpassword' 
            name='confirmpassword'
            onBlur={()=>handleInputBlur("confirmpassword")}

            className='w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter Confirmpassword'
             onChange={(event)=> handleInputChange("confirmpassword",event.target.value)}
             value={enteredValue.confirmpassword}

            />
             <p onClick={handleClick} className='eye   absolute h-[15px]  top-[7vh] left-[22vw] flex flex-row-reverse  mr-10 '>{show ? <TiEyeOutline /> :<IoMdEyeOff />}</p>
              
             { isConfirmPasswordInValid && <h6 className='error  text-red-500  ml-16'>confirm password is same as password</h6>}
        </div>
  
  

        <div className='w-[400px] h-[30px] mt-4'>
        <button 

      
        disabled={!isUserNameInValid && !isEmailInValid && !isPasswordInValid && !isConfirmPasswordInValid ? false : true}
     
        className='btn disabled:opacity-70 w-[300px] h-[30px] text-center mt-2 ml-16 bg-blue-600   text-[#264653]  border border-slate-300 rounded-sm  + {isDis?:"bg-pink-600" +"bg-green-300 "} ' type='submit'>SignUp</button>
        </div>

        <p className='text-sm mt-5 ml-24 '>Have already an account?
        <span className='text-rose-600'><NavLink to="/login">Login here</NavLink></span>
        </p>

        </div>


    </form>
      
   )
 }
 
 export default Signup
 