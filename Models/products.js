const mongoose = require('mongoose'); 
const productSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true
  },
  size: {
    type: string,
    required: true
  },
  description: {
    type: string,
    required: true
  },
  price: {
    type: number,
    required: true
  },
  quantity: {
    type: number,
    required: true
  },
  timestamps: true // date created and date updated
});

const product = mongoose.model('product', productSchema);