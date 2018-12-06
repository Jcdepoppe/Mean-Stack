const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.showAll)
    app.get('/new/:name', controller.add)
    app.get('/remove/:name', controller.delete)
    app.get('/:name', controller.show)
}