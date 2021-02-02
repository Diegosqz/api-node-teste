const express = require('express');
const router = express.Router();
const auth = require('../Middlewares/auth');

router.get('/', auth, (req, res) => { 
    console.log(res.locals.auth_data);
    return res.send ({message: 'Tudo ok aqui!Olá mundo'});
});


//vírgulas as vezes fodem o rolê

router.post('/', (req, res) => {
    return res.send({message:'aqui tbm' });
});
module.exports = router;
