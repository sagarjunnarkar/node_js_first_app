var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));

app.get('/index.htm', function (req, res){
  res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res){
  var file = __dirname + "/" + req.files.file.name;
  fs.readFile( req.files.file.path, function (err, data){
    if ( err ) {
      console.log( err );
    }else{
      response = {
        message: 'File uploaded successfully',
        filename: req.files.file.name
      };
      res.end(JSON.stringify(response));
    };
  })
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