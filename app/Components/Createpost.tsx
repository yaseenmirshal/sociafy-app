'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import instance from '../instence/instence';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
// import { useContext } from 'react';
import { createContext } from 'react';
import Home from '../Home/page'
import Stories from '../Components/Stories'
import toast from 'react-hot-toast';
import { GlobalContext } from './context/globalContext';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#1c1c1c',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  color: 'white',
};

const innerStyle = {
  backgroundColor: '#333333',
  borderRadius: '20px',
  width: '100%',
  height: '340px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '24px',
  marginTop: '20px',
  marginBottom: '20px',
  cursor: 'pointer',
};

const buttonStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center'
};

export const Data = createContext('');

interface NotificationProps {
  isWhite: boolean;

}

export const Createpost: React.FC<NotificationProps> = ({ isWhite }: NotificationProps) => {
  const {post , setPost} = useContext<any>(GlobalContext)
  
  const [description, setDescription] = useState<any>('');
  const [imageUrl, setImageUrl] = useState(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [selectFile, setSelectFile] = useState(null);
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (e:any) => {
    if (e.target.files && e.target.files[0]) {
      setSelectFile(e.target.files[0]);
    } else {
      console.log('No file selected');
    }
  };
  let userid:any = (localStorage.getItem("userid"))
  const handleApi = async (post:any) => {

    let usernteid:any = (localStorage.getItem("userid"))
  
    const formData = new FormData();
    formData.append('file', post);
    formData.append('desc', description);
    formData.append('userId', usernteid);
    try {
      const response = await instance.post('/createPost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Post created:', response.data);
      setImageUrl(response.data.post.image);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  useEffect(()=>{
   const fetchData = async ()=>{
    try {
      const response = await instance.get(`./posts/${userid}/timeline`)
      if (response.status==200){
        setPost(response.data)
        
      }
    } catch (error) {
      console.log(error)
    }
   }
   fetchData()

  },[])

  const addPost = () => {
    if (selectFile) {
      handleApi(selectFile);   
      handleClose(); 
      setSelectFile(null);
      setDescription(null);
      toast.success('post added successfully')
    }
  };
console.log(post,'postttaaaaaaaaa');

  return (
    <div>
      <input
        ref={fileInputRef}
        onChange={handleFile}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <button onClick={handleOpen} className="ml-[46px] mt-5 btn btn--primary">
        <span className="btn-inner">
          <span className="btn-label">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create Post
          </span>
          <span className="btn-blur"></span>
        </span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>
            <div onClick={handleUpload} style={innerStyle}>
              {selectFile ? (
                <img src={URL.createObjectURL(selectFile)} alt="preview" width={350} height={300} />
  
              ) : (
                <svg style={{ width: '60px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
                
              )}
            </div>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{ style: { color: '#fff', borderColor: 'white' } }}
              InputProps={{ style: { color: '#fff', borderColor: '#fff' } }}
            />
            <div style={buttonStyle}>
              <Button variant="outlined" style={{ color: 'white' }} onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={addPost} style={{ marginLeft: '10px' }}>Post</Button>
            </div>
          </Box>
        </Fade>
      </Modal>

      <Stories isWhite={isWhite}/>

      {post.map((item:any,index:any)=>(
      <div key={index} style={{borderRadius:'20px',width:'620px',height:'600px',backgroundColor:isWhite ? 'black' : '#DEDEDE' ,color:isWhite ? 'white' : 'black'}} className=' ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://cdn-icons-png.flaticon.com/512/149/149071.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className=' ml-12'>{localStorage.getItem("username")}</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >
      </div>
  
      <div style={{width:'550px'}} className='  h-14 ml-7 mt-2'>
      <p className=' text-sm'>{localStorage.getItem("username")}. {item.desc}</p>
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
     )) }

    </div>
  
  );
}

export default Createpost;
