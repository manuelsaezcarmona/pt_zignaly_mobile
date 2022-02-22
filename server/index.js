import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const template = `
  <header>
    <h1>Hola Mundo</h1>
  </header>
`;

app.get('/', (req, res) => {
  res.send(template);
});

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
