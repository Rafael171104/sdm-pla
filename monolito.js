const express = require('express');// Importa o framework Express
const app = express(); // Cria uma aplicação Express

app.use(express.json()); // Middleware para parsear JSON

// Simulação de um banco de dados em memória
let usuarios = [];// Array para armazenar usuários
let pedidos = [];// Array para armazenar pedidos

// Rota para criaçaão de usuários
app.post('/usuarios', (req, res) => {// Rota POST para criar um novo usuário
    const usuario = req.body;// Obtém os dados do usuário do corpo da requisição
    usuarios.push(usuario);// Adiciona o usuário ao array
 res.send({ mensagem: 'Usuário criado com sucesso!', usuario });// Envia uma resposta de sucesso
});

//rota para criar um pedido
app.post('/pedidos', (req, res) => {// Rota POST para criar um novo pedido
    const pedido = req.body;// Obtém os dados do pedido do corpo da requisição
    pedidos.push(pedido);// Adiciona o pedido ao array
 res.send({ mensagem: 'Pedido criado com sucesso!', pedido });// Envia uma resposta de sucesso
});

// rota para listar todos os pedidos e usuários
app.get('/dados', (req, res) => {// Rota GET para listar todos os usuários e pedidos
    res.send({ usuarios, pedidos });// Envia os arrays de usuários e pedidos como resposta
});


// Inicia o servidor na porta 3000
app.listen(3000, () => {// Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');// Loga uma mensagem quando o servidor estiver rodando
});