'use client';
import React, {  useState } from 'react'
import '/common.css'
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-hot-toast';
  import Notification from '../Components/Notification';
  import Profilebox from '../Components/Profilebox';
  import Stories from '../Components/Stories'

import Createpost from '../Components/Createpost';

interface HomeProps {
  imageUrl: string;
  description: string;
}


export const page: React.FC<HomeProps> = ({ imageUrl, description }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/whitelogo.png', '/sociafy.png'];

  const [isWhite, setIsWhite] = useState(true);

  const toggleColor = () => {
    setIsWhite(!isWhite);
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <>

    <div style={{width:'100%',height:'100vh',backgroundColor:'violet'}}>
     
    
          <div className='float-left' style={{width:'365px',height:'813px',backgroundColor:isWhite ? '#1A0033' : 'white' ,color:isWhite ? 'white' : 'black'}}>
          <Profilebox  isWhite={isWhite}/>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6  mt-10 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',fontWeight:'bold'}}>Feed</p>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7  mt-7 ml-12 cursor-pointer ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px'}}>Saved</p>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  mt-7 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px'}}>Messages</p>

<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  mt-7 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px'}}>Settings</p>
<Link href={'./Profile'}>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  mt-7 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px'}}>Profile</p>
</Link>

<button className='float-left '  style={{marginLeft:'50px',marginTop:'25px',marginRight:'15px',cursor:'default'}}>Switch Theme</button>
<label onChange={toggleColor} className="mt-5 switch">
    <input type="checkbox"/>
    <span className="slider"></span>
</label>
<Link href={'./Login'}>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  mt-40 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px'}}>Log out</p>
</Link>
        </div>
      <div  style={{height:'100vh',backgroundColor:isWhite ? '#1A0033' : 'white' ,color:isWhite ? 'white' : 'black'}} className='float-left overflow-scroll  w-1/2 hide-scrollbar'>
       <div className="pt-2 relative mx-auto text-slate-50">
         <img className='float-left' style={{width:'150px',marginLeft:'10px',marginTop:'20px'}} src={images[imageIndex]} alt="sociafy" />
       <input
       style={{backgroundColor: isWhite ? 'rgba(255, 255, 255, 0.25)' : '#ECECEC'}}
        className="`bg-white ${isWhite ? 'bg-opacity-25' : ''}` float-left ml-6 mt-4 w-72 h-12 px-5 rounded-xl text-base focus:outline-none border-none"
        type="search"
        name="search"
        placeholder="Search"/>
          <Createpost isWhite={isWhite}/>
{/* <Modalbox/> */}
     </div>
     
      
      {/* <h1 className='text-xl font-bold text-white ml-7 mt-7'>Feeds</h1> */}

      {/* {imageUrl && (
      <div style={{borderRadius:'20px',width:'620px',height:'600px',backgroundColor:isWhite ? 'black' : '#DEDEDE' ,color:isWhite ? 'white' : 'black'}} className=' ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://cdn-icons-png.flaticon.com/512/149/149071.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className=' ml-12'>{localStorage.getItem("username")}</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >
      </div>
      {description && (
      <div style={{width:'550px'}} className='  h-14 ml-7 mt-2'>
      <p className=' text-sm'>{localStorage.getItem("username")}. {description}</p>
      </div>
      )}
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8  mr-1 ml-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left  mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 mr-1 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left  mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8  cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

</div>
      </div>
      )} */}
     
    

      <div style={{borderRadius:'20px',width:'620px',height:'600px',backgroundColor:isWhite ? 'black' : '#DEDEDE' ,color:isWhite ? 'white' : 'black'}} className=' ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/bmw-logo-2020-present-1024x742.webp\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className=' ml-12'>bmwindia</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: 'url(\'https://wallpapers.com/images/high/bmw-desktop-hd-v32oehek1rjeoowc.webp\')', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >
      </div>
      <div style={{width:'550px'}} className='  h-14 ml-7 mt-2'>
      <p className=' text-sm'>Experience unparalleled luxury and performance with BMW, where innovation meets elegance on every journey.</p>
      </div>
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8  mr-1 ml-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left  mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 mr-1 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left  mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8  cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

</div>
      </div>
      
      <div style={{borderRadius:'20px',width:'620px',height:'600px',backgroundColor:isWhite ? 'black' : '#DEDEDE' ,color:isWhite ? 'white' : 'black'}} className=' ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfinderlandroverlogo4142330-115968_115913.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className=' ml-12'>Land rover</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: 'url(\'https://www.hdcarwallpapers.com/walls/land_rover_defender_110_country_pack_first_edition_2020_4k_2-HD.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >

      </div>
      <div style={{width:'550px'}} className='  h-14 ml-7 mt-2'>
      <p className=' text-sm'>Embark on a visual journey with breathtaking travel photography capturing the essence of destinations around the globe</p>
      </div>
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8  mr-1 ml-6 cursor-pointer ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left  mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8  mr-1 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left  mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
</div>  
      </div>
      <div style={{borderRadius:'20px',width:'620px',height:'600px',backgroundColor:isWhite ? 'black' : '#DEDEDE' ,color:isWhite ? 'white' : 'black'}} className=' ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/640px-Flag_of_Saudi_Arabia.svg.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className=' ml-12'>saudiarabia</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: 'url(\'https://i.pinimg.com/736x/eb/8e/fe/eb8efecf8e90df1d429451b1afae0c13.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >

      </div>
      <div style={{width:'550px'}} className='  h-14 ml-7 mt-2'>
      <p className=' text-sm'>Embark on a visual journey with breathtaking travel photography capturing the essence of destinations around the globe</p>
      </div>
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 mr-1 ml-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left  mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 mr-1 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left  mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

</div>
      </div>
     </div> 
    <Notification isWhite={isWhite}   />

     </div>
    </>
  )
}

export default page