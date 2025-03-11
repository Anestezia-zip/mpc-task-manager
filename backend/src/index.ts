import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from 'express';
import taskRoutes from './app/routes/taskRoutes';
import { connectDB } from './lib/database';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Task Manager API');
});

async function startServer() {
  try {
    await connectDB();
    console.log('MongoDB connected!');

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });

  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

startServer();
