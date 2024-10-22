const express =require('express');
const cors =require('cors');
const app = new express();
const rout=require('./route/employeeroutes');
require ('./db/connection');
const admin_route=require('./route/adminroutes')


require('dotenv').config();
const port=process.env.port
// app.use('/')



app.use(cors());


app.use('/home',rout);
app.use('/user',admin_route);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})