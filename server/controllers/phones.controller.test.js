import { Phone } from '../models/phone.model.js';
import { getAllPhones } from './phones.controller';

const mongoose = require('mongoose');

jest.mock('../models/phone.model');

describe('Given the phones controller', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When the getAllPhones is triggered', () => {
    describe('Then it works!! (promise resolved)', () => {
      beforeEach(() => {
        req = { params: {} };
        Phone.find.mockReturnValue([]);
      });
      test('should Phone model Exists and have a method find', () => {
        expect(Phone.find).toBeTruthy();
      });
      test('Then call to res.json(phones)', async () => {
        await getAllPhones(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('Then something was wrong (promise rejected)', () => {
      beforeEach(() => {
        Phone.find.mockRejectedValue(new Error());
      });
      test('Phone model exists and have a method "find"', () => {
        expect(Phone.find).toBeTruthy();
      });
      test('Then call next', async () => {
        await getAllPhones(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
});
