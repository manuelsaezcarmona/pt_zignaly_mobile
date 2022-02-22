import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as phonesRoutes } from './routes/phones.route.js';
import { connectDB } from './db/dbconnect.js';

dotenv.config();

const port = process.env.PORT || 3001;
export const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const template = `
  <header>
    <h1>Mobile Server</h1>
  </header>
`;

app.get('/', (req, res) => {
  res.send(template);
});

app.use('/phones', phonesRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening in http://localhost:${port}`);
});
