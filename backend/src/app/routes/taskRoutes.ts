import express from 'express';
import { createTask, getTaskById, getTasks, updateTask } from '../controllers/taskController';

const router = express.Router()

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.get('/:id', getTaskById);

export default router