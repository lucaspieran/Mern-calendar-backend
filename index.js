const express = require('express');
const { dbConection } = require('./database/config');
require('dotenv').config();
const cors = require('cors')
const app = express();

//base de datos
dbConection();

//cors
app.use(cors())


//rutas
app.use(express.static('public'));

//lectura y parseo body

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
//crud eventos






app.listen(process.env.PORT, () => {
    console.log(`servidor en puerto ${process.env.PORT}`)
});