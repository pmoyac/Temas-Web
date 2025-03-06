const mongoose = require('mongoose');
require('dotenv').config({path: './variables.env'});

const config = {
    url: process.env.URL_MONGO,
    options: {}
}

async function connectar() {
    try {
        return mongoose.connect(config.url, config.options);
    } catch (error) {
        
    }
}

async function desconectar() {
    return mongoose.disconnect();
}

module.exports = {connectar, desconectar};