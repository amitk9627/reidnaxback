const express=require('express');
const app=express();
const user =require('./controller/user.js')

app.get('/users',user)



module.exports=app;