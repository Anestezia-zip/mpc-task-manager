import express from 'express';
import { createTask, getTasks } from '../controllers/taskController';

const router = express.Router()

router.get('/', getTasks);
router.post('/', createTask);

export default router