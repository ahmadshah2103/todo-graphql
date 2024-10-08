const typeDefs = `
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
`;

module.exports = typeDefs;
