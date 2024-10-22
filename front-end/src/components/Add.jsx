import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosintercepters';

const Add = () => {
    const [form, setForm] = useState({
        empId: '',
        empName: '',
        empDesignation:'',
        empDepartment:'',
        empLocation: '',
        empSalary: ''
    })

    let fetchValue = (e) => {
        // console.log(event);
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const location=useLocation()//
    const navigate=useNavigate();
    let sentData = () => {
        // console.log(form);
        
        if(location.state!=null){

            axiosInstance.put('http://localhost:3000/home/edit/'+location.state.employee._id,form)
            .then((res)=>{
                // console.log(res.data);
                alert("Data Updated");
                navigate('/home');
            })
            .catch((error) =>{
                console.log(error);
            })
        }else{
            // console.log("inside post")
            axiosInstance.post('http://localhost:3000/home/addnew',form).then((res)=>{
                alert('added succesfully');
                navigate('/home');
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    };
    useEffect(()=>{
        if(location.state!=null){
            setForm({...form,
                empId:location.state.employee.empId,
                empName:location.state.employee.empName,
                empDesignation:location.state.employee.empDesignation,
                empDepartment:location.state.employee.empDepartment,
                empLocation:location.state.employee.empLocation,
                empSalary:location.state.employee.employeeFee
            })
    }
},[])

    return (

        // <button>Add New</button>
        <Box sx={{ padding: '2% 5% 2% 5%', backgroundColor: 'rgba(255, 255, 255, 0.888)',  }}>
            <h2>New employee</h2><br />

            <TextField id="outlined-basic"
                value={form.empId} 
                label="Employee Id"
                variant="outlined"
                name="empId"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.empName}
                label="Employee Name"
                variant="outlined"
                name="empName"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.empDesignation}
                label="Employee Category"
                variant="outlined"
                name="empDesignation"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.empDepartment}
                label="Employee Department"
                variant="outlined"
                name="empDepartment"
                onChange={fetchValue} /><br /><br />

            {/* <TextField id="outlined-basic"
                value={form.employeeImage} 
                label="Image URL"
                variant="outlined"
                name="employeeImage"
                onChange={fetchValue} /><br /><br /> */}

            <TextField id="outlined-basic"
                value={form.empLocation} 
                label="Employee Duration"
                variant="outlined"
                name="empLocation"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                value={form.employeeFee} 
                label="Employee Fee"
                variant="outlined"
                name="employeeFee"
                onChange={fetchValue} /><br /><br />

           
            <Button onClick={sentData} variant="contained">SUBMIT</Button>
        </Box>
    )
}

export default Add