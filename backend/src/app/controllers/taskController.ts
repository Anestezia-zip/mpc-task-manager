import { Request, Response } from "express";
import { Task, tasks } from "../platform/data";
import { nanoid } from "nanoid";

export const getTasks = (req: Request, res: Response) => res.json(tasks);

export const createTask = (req: Request, res: Response) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" })
    }

    const newTask: Task = {
        id: nanoid(6),
        title,
        description,
        status: false,
    }

    tasks.push(newTask);
    res.status(201).json(newTask);
}