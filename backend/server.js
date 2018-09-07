var express = require('express')
var request = require('request')
var bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
})

app.get('/api/state', (req, res) => {
    request(process.env.DOOM_STATE_SERVICE_URL + "/state", { json: true }, (err, r, body) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(body)
      }
    });
})

app.post('/api/shootDemon', (req, res) => {
    console.log(req.body)
    request.post(process.env.DOOM_ENGINE_SERVICE_URL + "/shootDemon", { json: true, body: req.body }, (err, r, body) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(body)
      }
    });
});

app.use('/', express.static('dist'))
 
app.listen(8080)