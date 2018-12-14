const Task = require("./models")

module.exports = {
    all: function(req, res){
        Task.find({}).then((data) => {
            res.json({message: "Success", data: data})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    },
    show: function(req, res){
        Task.findById(req.params.id).then((data) => {
            res.json({message: "Success", data: data})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    },
    create: function(req, res){
        Task.create(req.body).then((data) => {
            res.json({message: "Success", data: data})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    },
    update: function(req, res){
        Task.findByIdAndUpdate({_id: req.params.id}, req.body).then((data) => {
            res.json({message: "Success", data: data})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    },
    destroy: function(req, res){
        Task.findByIdAndDelete(req.params.id).then((data) => {
            res.json({message: "Success"})
        }).catch((err) => {
            res.json({message: "Error", error: err})
        })
    }
}