export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'completed'; 
}

export const tasks: Task[] = [];