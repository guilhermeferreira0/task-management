import { type Request, type Response } from 'express';
import { app } from './src/app';
import { sequelize } from './src/config/db';
import { userRouter } from './src/routes/userRouter';
import { taskRouter } from './src/routes/taskRouter';
import 'dotenv/config';

// initiating port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Running! http://localhost:${port}`);
});

// verify conection and creating automatic tables
(async () => {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    // sequelize.close()
    console.error('Unable to connect to the database:', error);
  }
})();

// api endpoints
app.get('/api', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Api working!' });
});
app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);
