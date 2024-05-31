import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import instance from '@/app/instence/instence';
import axios from 'axios';

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
  cursor :'pointer'
  
};

const buttonStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center'
};

export default function StylishModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectFile,setSelectFile] = React.useState('');
  const [desc,setDesc]=React.useState('');
  const [userId,setUserId]=React.useState('');
  const [imageUrl, setImageUrl] = React.useState<any>([]);
  

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFile = (e:any) => {
    const inputFile = e.target.files[0];
    setSelectFile(inputFile);
    if (inputFile) {
      console.log('Selected file:', inputFile);
    } else {
      console.log('No file selected.');
    }
  };


  async function handleApi(post: any, desc: string, userId: string) {
    const formData = new FormData();
    formData.append('file', post);
    formData.append('desc', desc);
    formData.append('userId', userId);
  
    try {
      const response = await instance.post('/createPost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Post created:', response.data);

      setImageUrl(response.data.post);
    } catch (error) {
      if (axios.isAxiosError(error)) {
 
        console.error('Error creating post:');
      } else {
        
        console.error('Error creating post:', error);
      }
    }
  }
  
  React.useEffect(() => {
    if (selectFile) {
      handleApi(selectFile,desc,userId);
    }
  }, [selectFile,desc,userId]);

  let newArry = []
  newArry.push(imageUrl)

  console.log(imageUrl,'this image url');
  
  // console.log(newArry,"arrayimage");
// console.log(typeof(imageUrl),'tttt');

  return (
    <div>
       <input
        ref={fileInputRef}
        onChange={handleFile}
        type="file" 
        accept="image/*"
        style={{ display: 'none' }}
      />
        <button onClick={handleOpen}  className="ml-[46px] mt-5 btn btn--primary ">
<span className="btn-inner ">
  <span className="btn-label">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
    Create Post
  </span>
  <span className="btn-blur" ></span>
</span>
</button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>
            <input
        ref={fileInputRef}
        onChange={handleFile}
        type="file" 
        accept="image/*"
        style={{ display: 'none' }}
      />
            <div onClick={handleUpload} style={innerStyle}>

            <div>

<div>

{imageUrl && Object.keys(imageUrl) ? (
  <div
  // key={index}
  style={{
    backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsample&psig=AOvVaw2Jhk0Db0hTj5PBl4u-8qm5&ust=1716439347213000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDIlP64oIYDFQAAAAAdAAAAABAE)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'blue',
    width: '400px',
    height: '400px',
  }}
>

  <p>userId: {imageUrl.userId}</p>
  <p>desc: {imageUrl.desc}</p>
  <p>likes: {JSON.stringify(imageUrl.likes)}</p>
  <p>createdAt: {imageUrl.createdAt}</p>
  <p>image: {imageUrl.image}</p>
</div>
) : (
  <p>No image data available</p>
)}
</div>

</div>





          <h4>Add a Post</h4> <br></br>
            <svg style={{ width: '60px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="currentColor" d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
</svg>
            </div>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              InputLabelProps={{
                style: { color: '#fff',borderColor:'white' },
              }}
              InputProps={{
                style: { color: '#fff', borderColor: '#fff' },
              }}
            />
            <div style={buttonStyle}>
              <Button variant="outlined" style={{color:'white'}} onClick={handleClose} >Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleClose} style={{ marginLeft: '10px' }}>Post</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
