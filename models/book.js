const { text } = require('body-parser');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  summary: String,
  reader: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: String
},
});

module.exports = mongoose.model("Book", bookSchema);
