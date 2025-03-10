import { Request, Response } from "express";
import { tasks } from "../platform/data";

export const getTasks = (req: Request, res: Response) => res.json(tasks);
