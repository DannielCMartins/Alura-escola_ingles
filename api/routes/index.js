const express = require('express');
const routesPessoas = require('./pessoas');

module.exports = app => {
    app.use(express.json()),
    app.use(routesPessoas)    
}
