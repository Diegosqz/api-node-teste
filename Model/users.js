const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UsersSchema = new Schema ({    
    email: { type: String}, required: true, unique: true, lowercase: true ,
    password: { type: String, required: true, select: false },
    create: {type: Date, default:Date.now}
}); 
        
    UsersSchema.pre('save', async function (next){
        let user = this;
        if (!user.isModified('password')) return next();
        UsersSchema.password = await bcrypt.hash(users.password, 10);
        return next();
    });


module.exports = mongoose.model('Users', UsersSchema);


        //select: false fala sobre a senha não retornar nas pesquisas realizadas.
        //o tipo vai ser de palavras, será algo que não pode ficar sem fazer e será em minusculo
        //Refatorando com async await
        //UsersSchema.pre('save', function (next){
        //let users = this;
        //if (!users.isModified('password')) return next();
        //bcrypt.hash(users.password, 10, (err, encrypted) => {
        //users.password = encrypted;
        //return next();
        //});
        //});