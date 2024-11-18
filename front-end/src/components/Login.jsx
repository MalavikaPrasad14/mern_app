import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosintercepters';


const Login = () => {
    const [admin,setAdmin]=useState({
        adminName: "",
        password: ""
    })
    const navigate= useNavigate();
    let updateadmin=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    }
    
    let sendData=()=>{
        if((admin.adminName=="admin")&&(admin.password=="12345"))
        {
            localStorage.setItem("adminName","admin");
            navigate('/home');
        }
        else{
            alert("Invalid adminName or password")
        }
        // axiosInstance.post("http://localhost:3000/admin/login",admin)
        // .then((res)=>{
        //     console.log(res)
        //     alert(res.data.message)
        //     if(res.data.admintoken)
        //     {
        //         localStorage.setItem("token",res.data.admintoken);
        //         navigate('/home');
        //     }
        // })
    }

    
  return (
    <>
    <h4>LOGIN PAGE</h4>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic-1" label="Email" variant="outlined" name='adminName' value={admin.adminName} onChange={updateadmin} /><br /><br />
        <TextField type='password' id="outlined-basic-2" label="Password" variant="outlined" name='password' value={admin.password} onChange={updateadmin}/><br /><br />
        <Button variant="contained" onClick={sendData}>Login</Button>

    </Box>
    </>
  )
}

export default Login