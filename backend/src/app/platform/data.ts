export interface Task {
    id: string;
    title: string;
    description: string;
    status: boolean;
}

export const tasks: Task[] = [
    { id: "1", title: "Task 1", description: "This is task 1", status: false },
    { id: "2", title: "Task 2", description: "This is task 2", status: false },
];