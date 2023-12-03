const express=require('express');
const app=express();
const cors=require('cors');
const {registerUser,loginUser}=require('./controller/user.js')
app.use(cors());
app.use(express.json());
app.post('/register',registerUser)
app.post('/login',loginUser)



module.exports=app;