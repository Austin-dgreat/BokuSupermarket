const mongose = require('mongoose'); 
const bcrypt = require('bcryptjs');

const userSchema = new mongose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  hasAdminAccess: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['superadmin', 'storekeeper', 'salesperson'],
    default: 'user'
  },

},
{timestamps: true}  // adds createdAt and updatedAt fields{timestamps: true}
);

// create model from schema
const user = mongose.model('user', userSchema);
module.exports = user;  // export the model to be used in other files 