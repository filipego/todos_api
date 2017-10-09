var express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.json({ message: "some data"})
})

app.get('/happy', function (req, res) {
  res.send(';)')
})

app.get('/*', function (req, res) {
  res.send('Not found')
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
