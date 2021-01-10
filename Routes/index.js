const express = required('express');
const router = express.Router();

router.get('/', (req, res) => { 
    return res.send ({message: 'Tudo ok nesta porra!Olá mundo'});
});

router.post('/', (req, res) => {
    return res.send({message:'aqui tbm' });
});
module.exports = router;
