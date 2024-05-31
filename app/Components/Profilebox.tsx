'use client'

import Link from 'next/link'

type NotificationProps = {
    isWhite: boolean;
  }
  
  const Profilebox: React.FC<NotificationProps> = ({ isWhite }: NotificationProps) => {
  return (
  <>
        <div className='float-left w-[365px] h-[260px] mb-14 ' style={{backgroundColor:isWhite ? '#1A0033' : 'white',color:isWhite ? 'white' : 'black'}}>
        <div className='ml-32' style={{backgroundImage: 'url(\'https://cdn-icons-png.flaticon.com/512/149/149071.png\')', backgroundSize: 'cover', backgroundPosition: 'center', marginTop:'30px', height:'110px',width:'110px',borderRadius:'100px 100px 100px 100px ',color:isWhite ? 'white' : 'black'}}></div>
          <Link href={'./Profile'}>
          <h1 className='mt-4 cursor-pointer hover:underline' style={{ fontSize:'19px',textAlign: "center",color:isWhite ? 'white' : 'black'}}>{localStorage.getItem("username")}
          
          </h1>
          </Link>
          <br/><br/>
          <div className=' flex items-center' style={{marginTop:'-20px',width:'365px',height:'30px',backgroundColor:isWhite ? '#1A0033' : 'white'}}>
            <h2 className='ml-16 font-semibold' style={{ textAlign: "center"}}>28</h2>
            <h2 className='ml-20 font-semibold' style={{textAlign: "center"}}>0</h2>
            <h2 className='ml-20 font-semibold' style={{textAlign: "center"}}>0</h2>
          </div>
        
          <div className=' flex items-center' style={{color:isWhite ? 'white' : 'black'}}>
      
            <p style={{fontWeight:'200',fontSize:'15px'}} className=' ml-14'>Posts</p>
            <p style={{fontWeight:'200',fontSize:'15px'}} className='ml-12'>Followers</p>
            <p style={{fontWeight:'200',fontSize:'15px'}} className=' ml-12'>Following</p>
          </div>
          <hr style={{marginTop:'25px'}} className="border-l-1 border-stone-700" />
          <div/>
          <div/>
          </div>
    </>
   
  )
}

export default Profilebox