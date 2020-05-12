const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json()); // serve para o express trabalhar com o json
app.use(express.urlencoded({ extended: true })); //faz com que o express trabalhe com o a requisição na url encoded
app.use(morgan('dev'));

app.use(require('./routes'));
app.listen(3000);
