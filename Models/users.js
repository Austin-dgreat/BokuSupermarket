const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true
  },
  email: {
    type: string,
    reruired: true,
    unique: true
  },
  password: {
    type: string,
    required: true
  },
  gender: {
    type: string,
    required: true
  },
  hasAtmCard: {
    type: Boolean,
    default: false
  },
  phone: {
    type: string,
    required: true
  },
  role: {
    type: string,
    enum: ['admin', 'user'],
    default: 'user'
  },
  
  timestamps: true // date created and date updated

});

// create model from schema
const user = mongoose.model('user', userSchema);