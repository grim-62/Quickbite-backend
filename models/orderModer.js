const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  items: [{
    menu_item: String,
    quantity: Number,
    price: Number,
  }],
  total_amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Delivered'],
    default: 'Pending',
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;