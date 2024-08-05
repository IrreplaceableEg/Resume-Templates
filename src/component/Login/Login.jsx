import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
//  import './Login.css'

function Login(){

   
let dbemail=localStorage.getItem('email');
let dbpassword=localStorage.getItem('password');
 
   const navigate =useNavigate();

   const[emailError,setEmailError]=useState(false);
   const[passwordError,setPasswordError] =useState(false);
  

const [enteredValue,setEnteredValue]=useState({

  email: "",
  password: "",
 
});

const [didEdit,setDidEdit] = useState({
  email:false,
  password:false,

});


const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
 const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


 const isEmailInValid =didEdit.email && !emailRegex.test(enteredValue.email);
const isPasswordInValid=didEdit.password && !passwordRegex.test(enteredValue.password);

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
  setDidEdit((preValues)=>({
    ...preValues,
    [identifier]:true,
  }));
}

  

function handleLogin(event){
  event.preventDefault();
 
let dbemail=localStorage.getItem('email');
let dbpassword=localStorage.getItem('password');
 

if(dbemail === enteredValue.email && dbpassword === enteredValue.password){
  localStorage.setItem("loggedIn",true);
  navigate("/details");

}

else if(enteredValue.email ==='' && enteredValue.password ===''){
  alert("Please fill the credentials for login ");
}
 
else{

  if(enteredValue.email !== dbemail){
    setEmailError(true);
  }
  if(enteredValue.password !== dbpassword){
    setPasswordError(true);
  }
  
      
    // alert(' Wrong Email and Password Please Try again');

     
  }
} 
  return (
    <form onSubmit={handleLogin} /*noValidate*/  className='topdiv   flex justify-center items-center w-[100vw] h-[100vh] bg-[#e5f4f7] '>

      <div className="inner  w-[450px] h-[500px] bg-[#ACC8E5] flex flex-col rounded-md">
      <h1 className='font-serif text-2xl m-10 text-center text-[#264653]'>Login Page</h1>
 
        <div className='form-gp flex flex-col  w-[400px] '>   
            <label htmlFor="email" className='text-xl font-serif  text-[#264653]  ml-16'>Email Address</label>
            <input type="email" 
            id="email"
            name="email"
            onBlur={() =>handleInputBlur("email")}            
           
             onChange={(event) => handleInputChange("email" , event.target.value)}
             value={enteredValue.email}

              className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter Email'
            />
             {isEmailInValid && <h6  className='error  text-red-500  ml-16'>Email must be @ .com </h6>}
             {emailError && <h6  className='error  text-red-500  ml-16'>Please enter Valid Email</h6>}
        </div>

        <div className='form-gp  w-[400px]  flex flex-col '>   
            <label htmlFor='password' className='text-xl font-serif  text-[#264653] mt-2 ml-16'>Password</label>
            <input type='password'
             id='password'
             name='password'
             onBlur={()=>handleInputBlur("password")}
              className=' w-[300px] h-[30px]  mt-2 ml-16 p-1 border border-slate-300 rounded-sm' placeholder='Enter Password'
             onChange={(event)=>handleInputChange("password",event.target.value)}
             value={enteredValue.password}
            />
             {isPasswordInValid && <h6 className='error  text-red-500 ml-16'>Password must be special,numeric etc </h6>}
             {passwordError && <h6 className='error  text-red-500 ml-16'>Please enter valid password</h6>}
        </div> 
         

        <div className='w-[400px] h-[30px] mt-4'>
  
        <button 
        disabled={(dbemail === enteredValue.email && dbpassword === enteredValue.password)? false:true}
        
        
        className='btn disabled:opacity-70 w-[300px] h-[30px] text-center mt-2 ml-16 bg-blue-600 text-[#264653]  border border-slate-300 rounded-md ' type='submit'>Login</button>
        </div>
       

        <div> 
        <p className='text-sm mt-5 ml-24 '> 
        Do not have account?

        <span className='text-rose-600'> <NavLink to="/signup">  SignUp here </NavLink></span>
        </p>

        </div>
        </div>
      


    </form>
  )
}

export default Login
