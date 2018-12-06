const People = require("./models")

module.exports = {
    showAll: function(req, res){
        People.find({})
            .then((data) => {
                res.json({message: "Success", data: data})
            }).catch((err) => {
                res.json({message: "Error", error: err})
            })
    },
    add: function(req, res){
        People.create(req.params).then((data) => {
            res.json({message: "Success", data: data})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    },
    delete: function(req, res) {
        People.findOneAndDelete(req.params)
            .then((data) => {
                res.json({message: "Success"})
            }).catch((err) => {
                res.json({message: "Error", error: err})
            })
    },
    show:function(req, res){
        People.findOne(req.params).then((data) => {
            res.json({message: "Success", data: data})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    }
}