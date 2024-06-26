const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1  // This ensures the quantity is at least 1
    },
    price: {
        type: Number,
        required: true
    }
});
const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;


