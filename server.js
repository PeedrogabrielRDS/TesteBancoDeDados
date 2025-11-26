// ________________________ IMPORTAÇÕES E CONFIGURAÇÕES_________________________________

import express, { response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import NovoUsuario from './NovoUsuario.js'
import cors from "cors";


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors());

// ________________________ CONEXÃO COM O BANCO DE DADOS _________________________________

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado ao DB")
    }catch (error) {
        console.log(error)
    }
}
connectDB()

app.get("/", (req, res) => {
    res.send("API funcionando no Render!");
});

// ________________________ CRIANDO UM NOVO USUARIO _________________________________

app.post("/api", async (req, res) => {
    try {
        const novoUsuario = await NovoUsuario.create(req.body)
        res.json(novoUsuario)
    } catch (error) {
        res.send(error)
    }
})

// ________________________ MOSTRANDO OS USUARIOS _________________________________

app.get("/api", async (req, res) => {
    try {
        const usuarios = await NovoUsuario.find()
        res.json(usuarios)
    } catch (error) {
        res.send(error)
    }
})

// ________________________ EDITANDO UM USUARIO _________________________________

app.put("/api/:id", async (req, res) => {
    try {
        const usuarioAtualizado = await NovoUsuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(usuarioAtualizado)
    } catch (error) {
        res.send(error)
    }
})

// ________________________ APGANDO UM USUARIOS _________________________________

app.delete("/api/:id", async (req, res) => {
    try {
        const usuarioExcluido = await NovoUsuario.findByIdAndDelete(
            req.params.id,
        )
        res.json(usuarioExcluido)
    } catch (error) {
        res.send(error)
    }
})

// ________________________ RODANDO O NODE EM UMA PORTA _________________________________

app.listen(PORT)