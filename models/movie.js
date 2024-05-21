// models/movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: String,
  genre: String,
  releaseYear: Number,
  rating: Number
});

module.exports = mongoose.model('Movie', movieSchema);
