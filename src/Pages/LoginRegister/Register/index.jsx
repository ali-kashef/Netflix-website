import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../../Components/Footer'
import { Box, Button, TextField, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { CheckBox } from '@mui/icons-material'
import useFormFields from '../../../Utils/useFormFields'
import AuthContext from '../../../Utils/AuthContext'

export default function Register({handlePageType}) {
  const [fields,handleChange]=useFormFields()
   const {handleToken}=useContext(AuthContext)
   const handleSubmit=(e)=>{
    e.preventDefault()
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
    body:JSON.stringify(fields)
}).then(res=>res.json()).then(data=>{
    
    handleToken(data.token)
    console.log(data.token)
    
}).catch(err=>console.log(err))
}

  return (
    <>
    <Box className={'body'} sx={{}}>
    <Box sx={{borderRadius:'1px',width:'500px',height:'700px',bgcolor:'black',opacity:'0.9',display:'flex',flexDirection:'column',mx:'auto',color:'white',pl:'20px',my:'auto'}}>
    <Box    component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },display:'flex',flexDirection:'column',mx:'auto',py:'60px' }}
      noValidate
      autoComplete="off" >
    <Typography variant='h4' fontWeight={'bold'}>Sign Up</Typography>
   <input name='username' type='text' placeholder='Email Adress'style={{width:'300px',height:'50px',marginTop:'20px',borderRadius:'5px'}}onChange={handleChange}/>
   <input name='password' type='password' placeholder='Password'style={{width:'300px',height:'50px',marginTop:'20px',borderRadius:'5px'}} onChange={handleChange}/>

    <Button onClick={handleSubmit} type='error'sx={{bgcolor:'red',width:'300px',mt:'20px',mx:'auto',color:'white',fontWeight:'bold'}}>Sign in</Button>
    <Typography sx={{opacity:'0.9',mx:'auto',mt:'20px'}}>OR</Typography>
    <Link to={''}>
    <Button onClick={handlePageType}  sx={{bgcolor:'gray',width:'300px',mt:'20px',mx:'auto',color:'white',fontWeight:'bold',opacity:'0.8'}}>Use  Sign-In Code</Button>
    </Link>
    <Link >
    <Typography sx={{mt:'20px',mx:'auto',color:'white',pl:'90px','& hover':{borderBottom:'1px solid red'}}}>
      Forgot Password
    </Typography>
    </Link>
    <Box sx={{color:'white',gap:'20px',flexDirection:'column'}}>
     <Box display={'flex'} gap={1}sx={{mb:'10px',mt:'10px'}}>
     <CheckBox></CheckBox>
     <Typography  sx={{color:'white'}}>Remember me</Typography>
     </Box>
     <Box display={'flex'} gap={1}>
    <Typography>New to Netflix?</Typography>
 <Typography sx={{color:'white',borderBottom:'1px solid white'}}>  Sign up now.</Typography>
 

     </Box>
<Box sx={{display:'flex',flexWrap:'wrap'}}>
<Typography sx={{color:'white',fontSize:'12px',opacity:'0.7',mt:'20px'}}>
  This page is protected by Google reCAPTCHA<br/> to ensure you're not a bot. <Link style={{color:'blue'}}>Learn more.</Link>
  </Typography>
  
</Box>
    </Box>
    </Box>
    </Box>
    </Box>
        <Footer/>
        </>
  )
}
