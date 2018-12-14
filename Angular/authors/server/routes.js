const controller = require("./controller");

module.exports = function(app){
    app.get('/api/authors', controller.all)
    app.get('/api/authors/:id', controller.show)
    app.post('/api/authors', controller.create)
    app.put('/api/authors/:id', controller.update)
    app.delete('/api/authors/:id', controller.destroy)
    app.patch('/api/authors/:aid/quotes', controller.createQuote)
    app.patch('/api/authors/:aid/quotes/:qid/delete', controller.deleteQuote)
    app.patch('/api/authors/:aid/quotes/:qid/vote', controller.vote)
    app.all("*", controller.angular)
}