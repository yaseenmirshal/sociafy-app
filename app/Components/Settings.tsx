'user client'
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';


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


export const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleChangePassword = (e: any) => {
    e.preventDefault();
    console.log('Password changed:', { currentPassword, newPassword });
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <>
      
      <p onClick={handleOpen} className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px'}}>Settings</p>

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
           
            <h2 className="text-2xl font-bold text-center text-white-900">Settings</h2>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Username
            </label>
            <h1 className='mt-2'>{localStorage.getItem('username')}</h1>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mt-7">
              Email
            </label>
            <h1 className='mt-2'>{localStorage.getItem('email')}</h1>
          </div>
         
          <form onSubmit={handleChangePassword} className="space-y-6">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-400 mt-7">
                Current Password
              </label>
              <input
                id="current-password"
                name="current-password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-400">
                New Password
              </label>
              <input
                id="new-password"
                name="new-password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full mt-5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
          </form>
            
            

          </Box>
        </Fade>
      </Modal>

      
      </>
  );
};

export default Settings;
