# TaskFlow - Todo List App

TaskFlow is a simple task management application built using React.js for the frontend, Node.js/Express.js for the backend, and SQLite for the database.

## Features

- Add new tasks to the list.
- Delete tasks from the list.
- Fetch tasks from the backend.
- Loader animation while fetching data.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** SQLite
- **Styling:** CSS

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Clone the Repository

```sh
git clone https://github.com/Surya413413/taskflow.git
cd taskflow
```

### Install Dependencies

#### Frontend

```sh
cd frontend
npm install
```

#### Backend

```sh
cd backend
npm install
```

### Running the Application

#### Start the Backend Server

```sh
cd backend
node index.js
```

#### Start the Frontend

```sh
cd frontend
npm start
```

## API Endpoints

### GET /todos

Fetches all tasks.

### POST /todos

Adds a new task.

### DELETE /todos/\:id

Deletes a task by ID.

## Deployment

The backend is deployed using Render:

```
https://todos-db2025backend.onrender.com/todos/
```

## Contributing

Pull requests are welcome. Please open an issue first to discuss any major changes.

## License

This project is open-source and available under the [MIT License](LICENSE).




