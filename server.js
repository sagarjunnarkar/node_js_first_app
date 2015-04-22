var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/index.htm', function (req, res){
	res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res){
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	res.end(JSON.stringify(response));
})

app.get('/',function (req, res){
	res.send('Hello GET');
})

app.post('/',function (req, res){
  res.send('Hello POST');
})

app.delete('/del_user', function (req, res){
  res.send('Hello DELETE');
})

app.get('/list_user', function (req, res){
  res.send('Page Listing');
})

app.get('/ab*cd', function (req, res){
	res.send('Page Pattern Match')
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})