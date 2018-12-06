const Dragon = require("./models")

module.exports = {
    index: function (req, res) {
        Dragon.find({}).then(function (data) {
            res.render("all", { dragon: data });
        }).catch(function (err) {
            res.redirect('/dragons/new');
        })
    },
    display: function (req, res) {
        Dragon.find({ _id: req.params.id }).then(function (data) {
            res.render("display", { dragon: data });
        }).catch(function (err) {
            res.redirect('/');
        })
    },
    new: function (req, res) {
        res.render("create", { messages: req.flash() });
    },
    create: function (req, res) {
        //var dragon = new Dragon({name: req.body.name, type: req.body.type, age: req.body.age});
        // Dragon.create(req.body, function(err){
        //     if (err) {
        //         console.log("Error when creating dragon", err);
        //         for (var key in err.errors) {
        //             req.flash('create', err.errors[key].message);
        //         }
        //         res.redirect('/dragons/new');
        //     } else {
        //         console.log("Dragon successfully created");
        //         res.redirect('/');
        //     }
        // })
        Dragon.create(req.body)
            .then((data) => res.redirect('/'))
            .catch((err) => {
                for (var key in err.errors) {
                    req.flash('create', err.errors[key].message);
                }
                res.redirect('dragons/new')
            })
    },
    edit: function (req, res) {
        Dragon.findById(req.params.id)
        .then(function (data) {
            res.render("edit", { dragon: data, messages: req.flash() });
        }).catch(function (err) {
            res.redirect('/');
        })
    },
    update: function (req, res) {
        Dragon.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => res.redirect("/"))
            .catch((err) => {
                for (var key in err.errors) {
                    req.flash('create', err.errors[key].message);
                }
                res.redirect("/")
            })
    },
    delete: function (req, res) {
        Dragon.findByIdAndDelete(req.params.id)
            .then((data) => {
                res.redirect("/")
            })
            .catch((err) => { res.redirect('/') })
    },
}