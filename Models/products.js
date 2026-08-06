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
  color: {
    type: string,
    // required: true
  }
},
{timestamps: true}
);

// create model from schema
const product = mongoose.model('product', productSchema);

module.exports = product;  // export the model to be used in other files