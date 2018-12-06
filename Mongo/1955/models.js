var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955');

const PeopleSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("People", PeopleSchema);