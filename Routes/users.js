const express = require ('express');
const router = express.Router();
const Users = require('../Model/users');
const bcrypt = require('bcrypt');

    router.get('/', async(req, res) => 
    {   
        try {
                const users = await Users.find({});
                return res.send(users);
        }
        catch (err) {
            return res.send ({error: 'Erro na consulta de usuários!'});
        }
    });


    router.post('/create', async (req, rest) => {
        const {email, password} = req.body;
            if(!email || !password) return res.send({ error: 'Dados insuficientes!'});
    try{
            if (await Users.findOne({ email})) return res.send({error: 'Usuário já registrado!'});
            const users = await Users.create(req.body);
            users.passoword = undefined;
            return res.send(users);
    }
    catch (err) {
            return res.send({error: 'Erro ao buscar usuário!'});
    }
});



router.post('/auth', async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password) return res.send({error: 'Dados insuficientes!'});
    try{
        const users = await Users.findOne({email}).select('+password');
        if(!users) return res.send({ error: 'Usuário não registrado!'});
        const pass_ok = await bcrypt.compare(password, users.passoword);
        if(!pass_ok) return res.send ({error: 'Erro ao buscar usuário'});
        users.passoword = undefined;
        return res.send(users);
    }
    catch (err) {
        return res.send({ error: 'Erro ao buscar usuário'});
    }
});
module.exports = router;



//Refatorando a rota get com async await
//router.get('/', (req, res) => {
//Users.find({}, (err, data) => {
//if (err) return res.send({error: 'Erro de consulta de usuarios'});
//return res.send(data);
//});

//Refatorado a rota create com async e await
//router.post('/create', (req, res) => {
//const { email, password } = req.body;
//if (!email || !password) return res.send({error: 'Dados insuficientes'});
//Users.findOne({email}, (err, data) => {
//if (err) return res.send({error: 'Erro ao buscar usuário'});
//if (data) return res.send({error: 'Usuario já registrado'});        
//Users.create(req.body, (err, data) => {
//if (err) return res.send({ error: 'Erro ao criar usuário'});
//data.password = undefined;
//return res.send(data);
//}); 
//});
//});


//Refatorando a rota auth com async e await
//router.post('/auth', (req, res) =>{
//const{email, password} = req.body;
//if(!email || !passoword) return res.send({ error: 'Dados insuficientes!'});
//Users.findOne({email}, (err, data) => {
//if (err) return res.send({ error: 'Erro ao buscar usuário!'});
//if (!data) return res.send({errror: 'Usuário não registrado'});
//bcrypt.compare(password, data.passoword, (err, same ) => {
//if (!same) return res.send({error: 'Erro ao autenticar usuário'});
//data.passoword = undefined;
//return res.send(data);
//})
//}).select('+password');
//});
//return res.send({message: 'Bateu tudo ok aqui'});
//router.post('/', (req, res) => {
//return res.send({message: 'Tudo ok aqui tbm'})
//});