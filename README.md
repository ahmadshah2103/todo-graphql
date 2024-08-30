# GraphQL Todo API

A simple GraphQL API for managing todos, built with Node.js, Apollo Server, and MongoDB.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/graphql-todo-api.git
   cd graphql-todo-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the project root and add your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_uri_here
   ```

4. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## API

The GraphQL server will be available at `http://localhost:4000` (or the port specified in your project).

### Queries

- `getTodos`: Fetch all todos
- `getTodo(id: ID!)`: Fetch a specific todo by ID

### Mutations

- `createTodo(title: String!, description: String!)`: Create a new todo
- `updateTodo(id: ID!, title: String, description: String, completed: Boolean)`: Update an existing todo
- `deleteTodo(id: ID!)`: Delete a todo

## Schema
```graphql
type Todo {
id: ID!
title: String!
description: String!
completed: Boolean!
}

type Query {
getTodos: [Todo!]!
getTodo(id: ID!): Todo!
}

type Mutation {
createTodo(title: String!, description: String!): Todo!
updateTodo(id: ID!, title: String, description: String, completed: Boolean): Todo!
deleteTodo(id: ID!): Todo!
}
```
