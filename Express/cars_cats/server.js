var express = require("express");
console.log("Let's find out what express is", express);
var app = express();
console.log("Let's find out what app is", app);
// app.get('/', function(request, response) {
//    console.log("The request object", request);
//    console.log("The response object", response);
//    response.send("<h1>Hello Express</h1>");
// })
app.listen(8000, function() {
  console.log("listening on port 8000");
})
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/cats/bob", function (request, response){
    var cat_info = {img: "white.jpg", name: "Bob", age: "2", likes: ["Snuggleing", "Sleeping", "Chasing mice"]};
    response.render('details', {cat: cat_info});
})

app.get("/cats/rob", function (request, response){
    var cat_info = {img: "grey.jpg", name: "Rob", age: "5", likes: ["Sleeping", "Sleeping", "Sleeping"]};
    response.render('details', {cat: cat_info})
})

app.get("/cats/bobby", function (request, response){
    var cat_info = {img: "black.jpg", name: "Bobby", age: "0.5", likes: ["Running", "Jumping", "Mauling", "Sleeping"]};
    response.render('details', {cat: cat_info})
})

app.get("/cats/bobert", function (request, response){
    var cat_info = {img: "reeces.jpg", name: "Bobert", age: "3", likes: ["Eating", "Sleeping", "Meowing at 3am"]};
    response.render('details', {cat: cat_info})
})

