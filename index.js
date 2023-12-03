const mongoose = require('mongoose');
const app = require('./app.js')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ramitgzp56:3ovagyO0dBzTFz2I@cluster0.rnbqm9z.mongodb.net/');
}
connectDB().then(()=>console.log('connected DB......')).catch(e=>console.log('disconnect DB',e))


app.listen(4002, () => console.log('listening.....'));