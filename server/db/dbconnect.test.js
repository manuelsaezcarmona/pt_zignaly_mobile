import { connectDB } from './dbconnect.js';

const mongoose = require('mongoose');

describe('Given a conection to DB with mongoose', () => {
  afterEach(() => {});
  afterAll(() => {
    mongoose.disconnect();
  });
  test('Then should connect to DBname mobilesDB', async () => {
    const connect = await connectDB();
    expect(connect).toBeTruthy();
    expect(connect.connections[0].name).toBe('mobilesDB');
    mongoose.disconnect();
  });
});
