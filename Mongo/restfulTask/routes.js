const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks', controller.all)
    app.get('/tasks/:id', controller.show)
    app.post('/tasks', controller.create)
    app.put('/tasks/:id', controller.update)
    app.delete('/tasks/:id', controller.destroy)
}