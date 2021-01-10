const mongoose = required('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema ({
    email: { type: String}, required: true, unique: true, lowercase: true ,
    password: { type: String, required: true, select: false },
    create: {type: Date, default:Date.now}
}) 
    //select: false fala sobre a senha não retornar nas pesquisas realizadas.
    //o tipo vai ser de palavras, será algo que não pode ficar sem fazer e será em minusculo


module.exports = mongoose.model('Users', UsersSchema);