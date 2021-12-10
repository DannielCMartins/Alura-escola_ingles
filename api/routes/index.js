const express = require('express');
const routesPessoas = require('./pessoas');
const routesTurmas = require('./turmas');
const routesNiveis = require('./niveis')

module.exports = app => {
    app.use(express.json()),
    app.use(
        routesPessoas,
        routesTurmas,
        routesNiveis
    )    
}
