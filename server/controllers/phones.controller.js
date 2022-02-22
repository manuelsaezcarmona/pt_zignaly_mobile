import { Phone } from '../models/phone.model.js';

export async function getAllPhones(req, res, next) {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (error) {
    res.status(500);
    next(error);
  }
}
