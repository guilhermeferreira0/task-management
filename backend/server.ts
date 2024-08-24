import { type Request, type Response } from 'express';
import { app } from './src/app';
import 'dotenv/config';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Running! http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Entrou');
});
