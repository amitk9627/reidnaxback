const express=require('express');
const app=express();
const {registerUser,loginUser}=require('./controller/user.js')

app.use(express.json());
app.post('/register',registerUser)
app.post('/login',loginUser)



module.exports=app;