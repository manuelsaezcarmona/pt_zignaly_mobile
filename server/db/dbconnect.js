import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const databaseName = process.env.DB_NAME;
  try {
    const uri = `mongodb+srv://${user}:${pass}@manucluster0.xmenl.mongodb.net/${databaseName}`;
    // Para realizar la conexion
    console.log(uri);

    const mongooseConnect = await mongoose.connect(uri);
    console.log(`conectado a ${databaseName}`);
    return mongooseConnect;
  } catch (error) {
    throw new Error('Error to connect with db');
  }
}
