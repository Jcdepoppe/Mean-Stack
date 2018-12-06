const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/dragons/new', controller.new)
    app.get('/dragons/:id', controller.display)
    app.post('/dragons', controller.create)
    app.get('/dragons/edit/:id', controller.edit)
    app.post('/dragons/:id', controller.update)
    app.get('/dragons/destroy/:id', controller.delete)
}