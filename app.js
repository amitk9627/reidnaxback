const express=require('express');
const app=express();
const cors=require('cors');
const {registerUser,loginUser}=require('./controller/user.js');
const {getStock,addStock} =require('./controller/stock.js');

app.use(cors());
app.use(express.json());

app.post('/register',registerUser)
app.post('/login',loginUser)

app.get('/getStock',getStock);
app.post('/addStock',addStock);



module.exports=app;