const User = require("./models")

module.exports = {
    index: function (req, res) {
        res.render("form", { messages: req.flash() });
    },
    quotes: function (req, res) {
        User.find({}).then(function(data){
            data.reverse();
            res.render("quotes", {user: data});
        }).catch(function(err){
            res.redirect('/');
        })
    },
    create: function (req, res) {
        var date = new Date();
        date.toDateString();
        var user = new User({ name: req.body.name, quote: req.body.quote, dateField: date});
        user.save(function (err) {
            if (err) {
                console.log("Error when creating user", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for (var key in err.errors) {
                    req.flash('create', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                res.redirect('/');
            } else {
                console.log("User successfully created");
                res.redirect('/quotes');
            }
        })
    }
}