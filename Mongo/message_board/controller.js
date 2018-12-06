const Message = require("./models")

module.exports = {
    board: function(req, res) {
        Message.find({})
            .then((data) => {
                data.reverse();
                res.render("board", {data: data, messages: req.flash()});
            }).catch((err) => {
                console.log("Error getting Messages from database")
                res.redirect('/')
            })
    },
    message: function(req, res){
        Message.create(req.body)
            .then((data) => {
                console.log(req.body.messages)
                res.redirect('/')
            })
            .catch((err) => {
                for( var key in err.errors){
                    req.flash('error', err.errors[key].message);
                }
                res.redirect('/')
            })
    },
    comment: function(req, res){
        Message.findByIdAndUpdate(req.params.id, 
            {$push: {comments:{
                user: req.body.user,
                content: req.body.content
            }}
        },
        {runValidators: true})
        .then((data) => {
            res.redirect('/')
        })
        .catch((err) => {
            for( var key in err.errors){
                req.flash('Cerror', err.errors[key].message);
            }
            res.redirect('/')
        })
    }
}