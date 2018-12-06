var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/dragons');
var DragonSchema = new mongoose.Schema({
    name: {type:String, required: [true, "Please enter a name for your dragon"]},
    type: {type: String, required: [true, "Please enter the type of your dragon"]},
    age: {type: Number, required: [true, "Please enter the age of your dragon"], min:[0, "Your dragons age cant be less than zero..."]}
}, {timestamps: true});


module.exports = mongoose.model("Dragon", DragonSchema);