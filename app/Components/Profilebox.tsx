'use client';
import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Link from 'next/link';
import instance from '../instence/instence';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: '#1c1c1c',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  color: 'white',
};

const innerStyle = {
  backgroundColor: '#333333',
  borderRadius: '100%',
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
  justifyContent: 'center',
};

type NotificationProps = {
  isWhite: boolean;
};

const Profilebox: React.FC<NotificationProps> = ({ isWhite }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [profile, setProfile] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectFile(e.target.files[0]);
    } else {
      console.log('No file selected');
    }
  };

  const addProfile = () => {
    if (selectFile) {
      const profileURL = URL.createObjectURL(selectFile);
      setProfile(profileURL);
      handleClose();
    }
  };

  useEffect(() => {
    if (selectFile) {
      const objectUrl = URL.createObjectURL(selectFile);
      setProfile(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectFile]);

  const [followers,setFollowers] = useState()
  const [following,setFollowing] = useState()
 let userid = localStorage.getItem('userid')

  const fetchUser = async ()=>{
    try{
    const response = await instance.get(`/user/${userid}`)
  const followersCount= (response.data.followers.length);
  const followingsCount= (response.data.following.length);
  console.log(followersCount,'followers');
  
  setFollowers(followersCount)
  setFollowing(followingsCount)
    }catch(error){
      console.error('error');
    }

  }
  useEffect(()=>{
    fetchUser()

  },[])

  return (
    <>
      <div
        className='float-left w-[365px] h-[260px] mb-14'
        style={{
          backgroundColor: isWhite ? '#1A0033' : 'white',
          color: isWhite ? 'white' : 'black',
        }}
      >
        <input
          ref={fileInputRef}
          onChange={handleFile}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
        />
        <div
          onClick={handleOpen}
          className="ml-32 relative mt-8 cursor-pointer h-28 w-28 rounded-full overflow-hidden"
        >
          {profile && (
            <div className="h-full w-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${profile})`,
              }}
            ></div>
          )}
          {!profile && (
            <div
              className="h-full w-full bg-center bg-cover"
              style={{
                backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/149/149071.png')`,
              }}
            ></div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
            Upload Profile
          </div>
        </div>

        <Link href={'./Profile'}>
          <h1
            className='mt-4 cursor-pointer hover:underline'
            style={{fontSize: '19px',textAlign: 'center', color: isWhite ? 'white' : 'black',}}
          >
            {typeof window !== 'undefined' && localStorage.getItem('username')}
          </h1>
        </Link>
        <br />
        <br />
        <div
          className='flex items-center'
          style={{marginTop: '-20px', width: '365px', height: '30px',backgroundColor: isWhite ? '#1A0033' : 'white',
          }}
        >
          <h2 className='ml-16 font-semibold' style={{ textAlign: 'center' }}>28</h2>
          <h2 className='ml-20 font-semibold' style={{ textAlign: 'center' }}>{followers}</h2>
          <h2 className='ml-24 font-semibold' style={{ textAlign: 'center' }}>{following}</h2>
        </div>

        <div className='flex items-center' style={{ color: isWhite ? 'white' : 'black' }}>
          <p style={{ fontWeight: '200', fontSize: '15px' }} className='ml-14'>Posts</p>
          <p style={{ fontWeight: '200', fontSize: '15px' }} className='ml-12'>Followers</p>
          <p style={{ fontWeight: '200', fontSize: '15px' }} className='ml-12'>Following</p>
        </div>
        <hr style={{ marginTop: '25px' }} className="border-l-1 border-stone-700" />
        <div />
        <div />
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
                Upload Profile
              </Typography>
              <div onClick={handleUpload} style={innerStyle}>
                {selectFile ? (
                  <img
                    src={URL.createObjectURL(selectFile)}
                    alt="preview"
                    width={420}
                    style={{ borderRadius: '100%', height: '340px' }}
                  />
                ) : (
                  <svg
                    style={{ width: '100px' }}
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect fill="none" height="256" width="256" />
                    <path d="M180,40h28a8,8,0,0,1,8,8V76" fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
                    <path d="M180,216h28a8,8,0,0,0,8-8V180" fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
                    <path d="M76,216H48a8,8,0,0,1-8-8V180" fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                    <path  d="M76,40H48a8,8,0,0,0-8,8V76" fill="none" stroke="grey"  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth="12" />
                    <circle cx="128" cy="112" fill="none" r="32" stroke="grey"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
                    <path d="M74.9,176a60.1,60.1,0,0,1,106.2,0" fill="none" stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
                  </svg>
                )}
              </div>

              <div style={buttonStyle}>
                <Button variant="outlined" style={{ color: 'white' }} onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={addProfile} style={{ marginLeft: '10px' }}
                >
                  Save
                </Button>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default Profilebox;
