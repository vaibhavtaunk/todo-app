# TODO List App

A simple TODO list application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- Add, edit, delete, and categorize tasks
- User authentication (optional)
- Responsive design
- Real-time updates

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app

   ```

2. Install dependencies for both server and client:

   ```bash
   npm install
   cd client
   npm install
   cd ..

   ```

3. Set up environment variables: Create a .env file in the root of your project and add the following:

   ```bash
   MONGODB_URI=your_mongodb_uri
   PORT=5000

   ```

## Running the Application

1. Start the server:

   ```bash
   npm run dev

   ```

2. Open your browser and navigate to http://localhost:3000.

## API Endpoints

### Todos

- GET /todos - Get all todos
- POST /todos - Create a new todo
- PATCH /todos/:id - Update a todo
- DELETE /todos/:id - Delete a todo

### Technologies Used

- MongoDB: Database
- Express.js: Server framework
- React: Frontend library
- Node.js: JavaScript runtime

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

Thanks to all the developers who contributed to open-source projects used in this app.
