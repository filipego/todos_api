var express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      todoRoutes = require('./routes/todos');

app.get('/', function (req, res) {
  res.send("hello")
});

app.use('/api/todos', todoRoutes);

app.get('/*', function (req, res) {
  res.send("404")
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});
