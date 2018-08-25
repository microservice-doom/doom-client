var express = require('express')
var app = express()
var fs = require('fs')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
});

app.get('/configuration', (req, res) => {
  res.send({
    stateUrl: process.env.DOOM_STATE_SERVICE_URL,
    engineUrl: process.env.DOOM_ENGINE_SERVICE_URL
  })
})

app.use('/', express.static('dist'))
 
app.listen(8080)