const mongoose = require('mongoose');
const StockSchema=({
   
    tata:{
        type:Number,
        required:true
    },
    reliance:{
        type:Number,
        required:true
    },
    year:{
        type:String,
        required:true
    }
});

const Stocks=mongoose.model('stocks',StockSchema);
module.exports=Stocks;
