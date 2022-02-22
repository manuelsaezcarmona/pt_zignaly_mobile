import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const cluster = process.env.DB_CLUSTER;
  const databaseName = process.env.DB_NAME;
  try {
    const uri = `mongodb+srv://${user}:${pass}${cluster}${databaseName}`;

    const mongooseConnect = await mongoose.connect(uri);
    // eslint-disable-next-line no-console
    console.log(`conectado a ${databaseName}`);
    return mongooseConnect;
  } catch (error) {
    throw new Error('Error to connect with db');
  }
}
