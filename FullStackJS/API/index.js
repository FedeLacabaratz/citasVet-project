const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear el servidor
const app = express();

/*
// Habilitar Cors SOLO para el puerto espefico que yo designo
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin);
        const existe = whitelist.some(dominio => dominio === origin);
        if (existe) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}

// Habilitar Cors
app.use(cors(corsOptions));
*/

// Habilitar Cors
app.use(cors());

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar routing
app.use('/', routes());

// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Server is Online');
});