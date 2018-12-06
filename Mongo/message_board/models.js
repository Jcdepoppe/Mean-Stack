var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageBoard');

const CommentSchema = new mongoose.Schema({
    user: {type: String, required: [true, "Please enter your name"]},
    content: {type: String, required: [true, "Comment cannot be empty!"]}
}, {timestamps: true});
const MessageSchema = new mongoose.Schema({
    user: {type: String, required: [true, "Please enter your name"]},
    content: {type: String, required: [true, "Your Message cannot be empty!"]},
    comments: [CommentSchema]
}, {timestamps: true});

module.exports = mongoose.model("Message", MessageSchema);