import mongoose from 'mongoose';
// const { model, Schema } = require('mongoose');

const phoneSchema = new mongoose.Schema({
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
// module.exports = model('Phone', phoneSchema);

export const Phone = mongoose.model('Phone', phoneSchema);
