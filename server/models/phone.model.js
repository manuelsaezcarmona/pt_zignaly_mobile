const { model, Schema } = require('mongoose');

const phoneSchema = Schema({
  title: {
    type: String
  },
  color: {
    type: String
  },
  price: {
    type: Number
  },
  imageURL: {
    type: String
  }
});
module.exports = model('Phone', phoneSchema);
