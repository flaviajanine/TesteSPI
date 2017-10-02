var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.listen(port);

var http = require('http');
var server = http.createServer(app);

var io = require('socket.io')(http);
var listener = io.listen(server);

server.listen(5000);
var path = require('path');
var cors = require('cors');
app.use(cors({credentials: false, origin: 'http://localhost:3000/'}));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'views')));


app.get('/', function(req, res){
    res.render('index');
  });

app.get('/index.html', function(req, res){
    res.render('index');
  });

app.get('/new.html', function(req, res){
    res.render('new',{
        color1:color1,
        color2:color2
    });
   
  });  

listener.on('connection',  function(socket){
    console.log('Connected!!');
    setInterval( function(){
        console.log('emitting!');
        socket.emit('color',{color: randomColor()});
    }, 5000)

})


setInterval( function(){
    console.log('New Color!!');
    color1 = randomColor();
    color2 = randomColor();
    console.log(color1);
    console.log(color2);
    
}, 5000)

function randomColor(){
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
console.log('Server listening on port: ' + port);
