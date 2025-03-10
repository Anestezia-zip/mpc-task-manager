import express, { Request, Response } from 'express';
import taskRoutes from './app/routes/taskRoutes';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Use routes for tasks
app.use('/api/tasks', taskRoutes);

// Handler for root route “/”
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Task Manager API')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
