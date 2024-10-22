import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosintercepters';


const Home = () => {

    const [employee, setEmployee] = useState([]);

    // Fetching data from external API
    useEffect(() => {
        axiosInstance.get('http://localhost:3000/home/')
            .then((res) => {
                setEmployee(res.data);
            });
    }, []);

    // const nav = useNavigate();
    const handleDelete = (id) => {
        axiosInstance.delete('http://localhost:3000/home/delete/' + id)
            .then((res) => {
                // nav('/')
                alert('Data Deleted')
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
                });

    }

    const navigate=useNavigate();
    function handleUpdate(employee) {
        navigate('/add',{state:{employee}})
    }


    return (
        <>
            

            <Grid container spacing={3} sx={{ padding: 2 }}>
                {employee.map((employee) => (
                    <Grid item xs={12} sm={6} md={3} key={employee.empId}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                sx={{ height: 180 }}
                                image={employee.empImage}
                                title={employee.empName}
                            />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                    {employee.empName}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                    Department: {employee.empDepartment}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                    employee Salary: {employee.empSalary} INR
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                    {employee.empDesignation}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color='primary'>Read more</Button>
                                <Button size="small" color='secondary' onClick={() => handleUpdate(employee)}>Edit </Button>
                                <Button size="small" onClick={() => handleDelete(employee._id)} color='warning'>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Home;