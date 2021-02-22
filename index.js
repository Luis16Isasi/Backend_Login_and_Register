const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const bodyParser = require('body-parser');

//import cors
const cors = require('cors');
//crear el servidor
const app = express();

//habilitar cors
app.use(cors());

//conectar con mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb+srv://luis:luisas45@cluster0.yurrz.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

//habailitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//habilitando el routing
app.use('/', router());

//obtener el puerto por el servidor o asignarle uno local
app.set('port', process.env.PORT || 4000);

//arrancar el servidor
app.listen(app.get('port'), () => {
    console.log('servidor corriendo en el puerto 4000');
});
