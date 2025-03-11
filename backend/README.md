# 📝 Task Manager Backend API

This is a simple CRUD API for managing tasks, built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

## 🚀 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/Anestezia-zip/mpc-task-manager.git
   cd task-manager/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file by copying the example:
   ```
   cp .env.example .env
   ```

   Then update your `.env` file with your MongoDB URI:
   ```
   MONGO_URI=your-mongodb-uri-here
   ```

   ⚠️ Never commit `.env` to your repository. Keep sensitive data safe.

## 💻 Run the Server

For development:
```
npx ts-node src/index.ts
```

Or build and run the production version:
```
npm run build
node dist/index.js
```

## 📚 API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | /api/tasks       | Get all tasks          |
| GET    | /api/tasks/:id   | Get task by ID         |
| POST   | /api/tasks       | Create a new task      |
| PUT    | /api/tasks/:id   | Update task by ID      |
| DELETE | /api/tasks/:id   | Delete task by ID      |

## 📁 Project Structure

```
backend/
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   │   └── taskController.ts
│   │   ├── models/
│   │   │   └── taskModel.ts
│   │   └── routes/
│   │       └── taskRoutes.ts
│   ├── lib/
│   │   └── database.ts
│   └── index.ts
├── .env
├── .env.example
├── tsconfig.json
└── package.json
```




