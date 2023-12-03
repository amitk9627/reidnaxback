const mongoose = require('mongoose');
const app = require('./app.js')

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/reidnax');
}
connectDB().then(()=>console.log('connected DB......')).catch(e=>console.log('disconnect DB',e))


app.listen(4002, () => console.log('listening.....'));