const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    required: false
  }
},
{timestamps: true}
);

// create model from schema
const product = mongoose.model('product', productSchema);

module.exports = product;  // export the model to be used in other files