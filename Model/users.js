const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UsersSchema = new Schema ({    
    email: { type: String}, required: true, unique: true, lowercase: true ,
    password: { type: String, required: true, select: false },
    create: {type: Date, default:Date.now}
}); 
    //select: false fala sobre a senha não retornar nas pesquisas realizadas.
    //o tipo vai ser de palavras, será algo que não pode ficar sem fazer e será em minusculo

    UsersSchema.pre('save', function (next){
        let users = this;
        if (!users.isModified('password')) return next();
    
        bcrypt.hash(users.password, 10, (err, encrypted) => {
        users.password = encrypted;
        return next();
        });
    });
        

module.exports = mongoose.model('Users', UsersSchema);