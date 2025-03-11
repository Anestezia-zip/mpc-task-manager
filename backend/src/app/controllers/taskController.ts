import { Request, Response } from "express";
import { Task, tasks } from "../platform/data";
import { nanoid } from "nanoid";

export const getTasks = (req: Request, res: Response) => res.json(tasks);

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
};

// Function checks if the title is provided, generates a unique ID,
// adds the task to the array, and returns the created task with a 201 status code.
export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask: Task = {
    id: nanoid(6),
    title,
    description,
    status: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Function checks if the task exists, validates the title (it must not be empty),
// and updates the task fields (title, description, and status).
// If the task is updated successfully, it returns the updated task.
export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (!title || title.trim() === "") {
    return res
      .status(400)
      .json({ message: "Title is required and cannot be empty" });
  }

  task.title = title;
  task.description = description; // Пустая строка допустима
  task.status = status;

  return res.status(200).json(task);
};
