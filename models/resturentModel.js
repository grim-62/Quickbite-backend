const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  cuisines: [{
    type: String,
  }],
  average_cost_for_two: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  menu: [{
    name: String,
    price: Number,
  }],
  featured_image: String,
  opening_hours: {
    type: String,
  },
  // Other details like contact information, tags, etc.
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
