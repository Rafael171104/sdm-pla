const express = require('express');//import express
const axios = require('axios');//import axios
const app = express();//import express
app.use(express.json());  //middleware to parse JSON

app.post('/pedidos', (req, res) => {//endpoint to create orders
    const pedido = req.body;//get order data from request body
    console.log(`Pedido recebido para o usuário ID: ${pedido.userId}`);//log user ID
    res.send({message: 'Pedido criado com sucesso!', pedido});//send success response
});

app.listen(4000, () => {//start server on port 4000
    console.log('Order Service rodando na porta 4000');//log server start message
});