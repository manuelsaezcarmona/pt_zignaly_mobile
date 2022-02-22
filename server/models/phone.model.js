const { model, Schema } = require('mongoose');

const phoneSchema = Schema({
  title: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  }
});
module.exports = model('Phone', phoneSchema);
