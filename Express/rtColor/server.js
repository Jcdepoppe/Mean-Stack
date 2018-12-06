const express = require('express');
var path = require("path");
const app = express();
app.use(express.static(__dirname + "/views"));
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var color;

io.on('connection', function (socket) {
    socket.on('green', function(){
        color = "darkgreen";
        io.emit('color', color)
    })

    socket.on('blue', function(){
        color = "darkblue";
        io.emit('color', color)
    })

    socket.on('red', function(){
        color = "darkred";
        io.emit('color', color)
    })
      
});

app.get('/', function(req, res) {
    res.render("color");
})