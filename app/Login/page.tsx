'use client'
import React, {  useState } from 'react'
import Link from 'next/link';
import '/common.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import instance from '../instence/instence';



function page() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e:any)=>{
    try{
    e.preventDefault();
    const response  = await instance.post('/auth/login',{email:email,password:password})
    console.log(response)
    if(email == email) localStorage.setItem('role','user')
    localStorage.setItem('token',response.data.token)

    const kona = await instance.get('/user/')
    let proo = (kona.data)
    
    const pdct = proo.find((value:any)  => value.email==email);
     console.log(pdct._id)

     localStorage.setItem("userid",pdct._id)
     localStorage.setItem("username",pdct.username)
     localStorage.setItem("email",pdct.email)
     

    window.location.href='/Home'
     console.log("User is created")
     toast.success('login succeful')
}
  catch (error){
    console.log(error);
    toast.error('please enter valid credentials')
  }
     console.log(email);
     console.log(password);
  }
     
     
 const handleUsernameChange = (e:any) => {  
    setEmail(e.target.value)
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };


  return (
    <>  
    <Link href={'./'}><img className='signsoc' style={{width:'180px',marginLeft:'610px',marginTop:'25px',marginRight:'100px'}} src="sociafy.png" alt="sociafy logo" /></Link>
    <img className='superman float-left mt-16 ml-14 animate-up' style={{width:'650px',height:'650px'}} src="welcome.png" alt="logimg" />
    <div className='float-left w-1/2 h-screen '>
<div className='logdiv ml-48 pt-44'>
     <h1 className="text-3xl font-medium mt-14">Welcome.</h1>
<form onSubmit={handleSubmit}>
     <div className="w-80 mt-9">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " 
      value={username}
      onChange={handleUsernameChange}
      required
      /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
        Username or Email
    </label>
  </div>
</div> 
<div className="w-80 mt-5">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" "
      type="password"
      value={password}
      onChange={handlePasswordChange}
      required
      /><label
      
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
        Enter Password
    </label>
  </div>
</div> 


<button type='submit' className=" w-80 mt-7 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
  Login
</button>

<br></br>
</form>

<h3 className='dont mt-3'>Don't have an account?</h3>
<Link href={'./Signup'}>
<p style={{position:'absolute',marginTop:'-23px',marginLeft:'185px'}} className='text-blue-600'>
 <u>Signup</u>
</p>
</Link>
</div>
    </div>

    </>
  )
}

export default page;