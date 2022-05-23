const express = require('express');
const cors =  require('cors');
app = express();
app.use(express.json());
app.use(cors())

// Rota
app.use('/v1', require('./src/routes'));

app.listen(3001, console.log("Servidor Iniciado"));