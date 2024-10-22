import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosintercepters';


const Login = () => {
    const [admin,setAdmin]=useState({
        adminname: "",
        password: ""
    })

    let updateadmin=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    }

    let sendData=()=>{
        // if((admin.adminname=="admin")&&(admin.password=="12345"))
        // {
        //     sessionStorage.setItem("adminname","admin");
        //     navigate('/home');
        // }
        // else{
        //     alert("Invalid adminname or password")
        // }
        axiosInstance.post("http://localhost:3000/admin/login",admin)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            if(res.data.admintoken)
            {
                localStorage.setItem("token",res.data.admintoken);
                navigate('/home');
            }
        })
    }

    const navigate= useNavigate();
  return (
    <>
    <h4>LOGIN PAGE</h4>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Email" variant="outlined" name='adminname' value={admin.adminname} onChange={updateadmin} /><br /><br />
        <TextField type='password' id="outlined-basic" label="Password" variant="outlined" name='password' value={admin.password} onChange={updateadmin}/><br /><br />
        <Button variant="contained" onClick={sendData}>Login</Button>

    </Box>
    </>
  )
}

export default Login