const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.board)
    app.post('/message', controller.message)
    app.post('/message/:id', controller.comment)
}