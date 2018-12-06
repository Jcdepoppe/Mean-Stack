var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quotesDB');
var UserSchema = new mongoose.Schema({
    fakeId: {type: Number, default: 0},
    name: {type:String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 8},
    dateField: {type: Date}
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
mongoose.Promise = global.Promise;

module.exports = User;