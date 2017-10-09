const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hey World!')
})

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
