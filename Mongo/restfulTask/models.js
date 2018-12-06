var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');

const TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
}, {timestamps: true});

module.exports = mongoose.model("Tasks", TaskSchema);