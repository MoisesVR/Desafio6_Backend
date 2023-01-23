const express = require('express')
const router = express.Router()
const { getUseVerified } = require('../controllers/sessionController');
const { userRegister } = require('../controllers/usersController');
const { isLogin } = require('../middlewares/isLogin');

router.post('/usuarios', userRegister)

router.get('/usuarios', isLogin ,getUseVerified);

router.get("*", (req, res) => {
    res.status(400).send("Esta ruta no existe");
});

module.exports = router;