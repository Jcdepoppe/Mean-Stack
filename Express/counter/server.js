// require express
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if(!req.session.count){
        req.session.count = 1;
    }
    else{
        req.session.count++;
    }
    res.locals.count = req.session.count;
    res.render("index");
})

app.get('/double', function(req, res) {
    req.session.count++;
    res.redirect('/');
})

app.get('/reset', function(req, res) {
    req.session.count = 0;
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});