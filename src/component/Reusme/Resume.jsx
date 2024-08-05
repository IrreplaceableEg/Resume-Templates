import React from 'react'
import Header from '../Header/Header'
import { useLocation ,useNavigate} from 'react-router-dom'
// import './Resume.css'
 

function Resume() {
  const navigate=useNavigate();
  const location = useLocation();

   let clnam=location.state.clname;
  // console.log(location);
  console.log(location.state.clname);




  let dbName=localStorage.getItem('userName')
let dbEmail=localStorage.getItem('email');
let dbQualification=localStorage.getItem('qualification');
let dbPostion =localStorage.getItem('postion');


 
// function prevPage(){
//   navigate('/templates');

// }
  return (
    <div>
      <Header></Header>
      <div className='container bg-[#e5f4f7] w-[100vw] h-[92vh] sm:w-[100vw] sm:h-[92vh]'>

      <div>
      {/* <button className='prevbtn w-[98px] h-[32px] flex justify-center ml-3 p-1  items-center bg-white hover:bg-[#ACC8E5] text-[#264653]  border border-slate-300 rounded-md' onClick={prevPage} > ❮ Previous </button> */}
      </div>

      <h1 className='resumeh1 font-serif text-2xl pt-7 text-blue-600  flex  justify-center items-center '>Your Selected Resume</h1>

      <div className='resumeWraper flex  justify-center items-center'>

      <div className={clnam +' w-[25vw] h-[30vh] rounded-md'}>
        
         <h3> Your Name is {dbName}</h3>
        <h3>Your Email  is {dbEmail}</h3>
        <h3>Your qualification {dbQualification}</h3>
        <h3>Your Postion  {dbPostion}</h3>          

        </div>
        </div>
      
       
        </div>
    </div>
  )
}

export default Resume
