const Todo = require("../models/Todo");

module.exports = {
    Query: {
        async getTodos() {
            try {
                const todos = await Todo.find({}).sort({
                    createdAt: -1,
                    updatedAt: -1,
                });
                return todos;
            } catch (err) {
                console.log(err);
            }
        },
        async getTodo(_, { id }) {
            try {
                const todo = await Todo.findById(id);
                return todo;
            } catch (err) {
                console.log(err);
            }
        },
    },

    Mutation: {
        async createTodo(_, { title, description }) {
            try {
                const newTodo = await Todo.create({ title, description });
                return newTodo;
            } catch (err) {
                console.log(err);
            }
        },

        async updateTodo(_, { id, title, description, completed }) {
            try {
                const updatedTodo = await Todo.findByIdAndUpdate(
                    id,
                    { title, description, completed },
                    { new: true }
                );
                return updatedTodo;
            } catch (err) {
                console.log(err);
            }
        },

        async deleteTodo(_, { id }) {
            try {
                const deletedTodo = await Todo.findByIdAndDelete(id);
                return deletedTodo;
            } catch (err) {
                console.log(err);
            }
        },
    },
};
