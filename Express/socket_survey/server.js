const express = require('express');
var path = require("path");
const app = express();
app.use(express.static(__dirname + "/views"));
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

io.on('connection', function (socket) { //2
    socket.on('sendForm', function(data){
        io.emit('info', data)
    })
      
});

app.get('/', function(req, res) {
    res.render("index");
})
