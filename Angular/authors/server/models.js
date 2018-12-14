var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/authors');


const QuoteSchema = new mongoose.Schema({
    content: {type: String, required: true, minlength: 3},
    votes: {type: Number}
}, {timestamps: true})
const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must enter the authors name!"], minlength: [3, "The authors name must be at least 3 characters"], unique: true, uniqueCaseInsensitive: true},
    quotes: [QuoteSchema]
}, {timestamps: true});

AuthorSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Authors", AuthorSchema);