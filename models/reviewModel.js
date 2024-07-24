const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: String,
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
