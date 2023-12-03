const Users = require('../model/user.js');
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if(!user){
        return res.json({
            status:false,
            message:"Could't find user"
        })
    }
    try {
        if (user.password == password) {
            return res.json({
                status: true,
                meassage: 'user Logged in'
            })
        }
    } catch {
        res.json({
            status: false,
            meaasge: 'Wrong password'
        })
    }
}
const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.create({ email: email, password: password });
        return res.status(201).json({
            status: true,
            user
        })
    } catch {
        res.status(404).json({
            status: false
        })
    }
}
module.exports = { registerUser, loginUser }