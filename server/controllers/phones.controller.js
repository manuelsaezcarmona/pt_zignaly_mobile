import { Phone } from '../models/phone.model.js';
// const Phone = require('../models/phone.model');

export async function getAllPhones(req, res, next) {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (error) {
    res.status(500);
    next(error);
  }
}
