import mongoose, { Document, Schema } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  status: boolean;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: Boolean, required: true, default: false },
});

const TaskModel = mongoose.model<Task>('Task', taskSchema);

export default TaskModel;
