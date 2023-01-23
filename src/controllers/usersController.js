const { createUser } = require('../models/usersModel')

const userRegister = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const newUser = await createUser(email, password, rol, lenguage);
        res.json(newUser);
    } catch (error) {
        console.log(error)
    }
}


module.exports = { userRegister };