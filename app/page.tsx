
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <div className="  flex items-center ">
      <img style={{width:'210px',marginLeft:'50px',marginTop:'25px',marginRight:'100px'}} src="sociafy.png" alt="sociafy logo" />
      <p style={{marginLeft:'500px'}} className=" mt-7 hover:cursor-pointer hover:text-fuchsia-950 hover:scale-110 transition duration-300 ease-in-out">About</p>
      <p className="ml-16 mt-7 hover:cursor-pointer hover:text-fuchsia-950 hover:scale-110 transition duration-300 ease-in-out ">Contact</p>
      <p className="ml-16 mt-7 hover:cursor-pointer hover:text-fuchsia-950 hover:scale-110 transition duration-300 ease-in-out">Services</p>
      <p className="ml-16 mt-7 hover:cursor-pointer hover:text-fuchsia-950 hover:scale-110 transition duration-300 ease-in-out">Community</p>
    </div>
    <div className=" lg:w-1/1  mt-52 ml-28">
      <h1 className="text-4xl">Discover, Connect, Thrive:<br></br> Where Every Moment Matters!</h1>
    </div>
    <div className="float-left lg:w-1/1  ml-28 mt-4">
      <h1 className="text-1xl font-montserrat">Welcome to Sociafy! Dive into a world of connections. Share <br></br>passions, discover interests, connect. Sociafy: Your go-to <br></br>platform for meaningful connections. Let's Sociafy together!</h1>
      <Link href="/Signup">
      <button className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
  Register Now
</button>
</Link>
<Link href="/Login">
<button className="ml-3 mt-4 bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-black text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
  Login
</button>
</Link>


    </div>
    <div style={{width:'550px',height:'433px',marginTop:'-200px',marginLeft:'740px'}}> <img  src="newcom.png" alt="iluuuuuuuuuuu" />
</div>
     
    <svg  style={{marginTop:'-89px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#6A1B9A" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
    
    </>
  );    
}
