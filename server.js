var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dev'));
app.get('*', function(req, res){
  res.redirect('/404.html');
});
app.listen(port);
console.log('Listening on port ' + port);