import mongoose from "mongoose";
const novoUsuario = new mongoose.Schema({
    nome: String,
    feedback: String,
    email: String,
    telefone: String,
})

export default mongoose.model("NovoUsuario", novoUsuario)