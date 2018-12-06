const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/quotes', controller.quotes)
    app.post('/quotes/add', controller.create)
}