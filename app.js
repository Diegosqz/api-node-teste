const express = required('express');
const app = express();
const indexRoute = required('./Routes/index');
const usersRoute = required('./Routes/users');
const mongoose = required('mongoose');
const bodyParser = required('body-parser');
const url = 'mongodb+srv://usuario_admin:senhaqualquer@clusteapitest.westn.mongodb.net/<dbname>?retryWrites=true&w=majority'
const options = {reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser:true};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados, se fudeu:' + err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do bd, vai se fuder');
});
mongoose.connection.on ('connected', () => {
    console.log('Aplicação conectada com sucesso ao bd, boaaaa!');
});

//body - parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);
app.use('/', indexRoute);
app.use('/', usersRoute);
    //Usecreateindez basicamente a mesma merda do de baixo
    //useNewUrlParser é para usar código antigo sem ficar enchendo o saco
    //string de conexão -> mongodb+srv://usuario_admin:<password>@clusteapitest.westn.mongodb.net/<dbname>?retryWrites=true&w=majority
    //app.get('/', (req, res) => {
    //let obj = req.query;
    //obj.nome
    //ou pode ser utilizado também o app.get('/', function (req, res))
    //return res.send({message: 'Tudo ok com o metodo get! você enviou o nome ${objt.nome} com idade de ${obj.idade} anos!'});
    // });
    //app.post('/', (req, res) => {
    //return res.send({message: 'tudo ok'});
    //});
    //Declarar assim é coisa de MACACO, tanto de uma forma quanto de outra, não faça assim. Sempre defina rotas.

app.listen(3000);

module.exports = app;
