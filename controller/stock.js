const Stocks = require('../model/stock.js')

const getStock = async (req, res) => {
    const allStocks=await Stocks.find({});
    res.json({
        status:true,
        allStocks
    })
}
const addStock = async (req, res) => {
    const { tata, reliance, year } = req.body;

    try {
        const newStock= await Stocks.create({tata,reliance,year});
        res.status(201).json({
            status:true,
            newStock
        });
    } catch {
        res.status(404).json({
            status:false,
            message:"stock not found"
        })
    }

}

module.exports = { getStock, addStock };