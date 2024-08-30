const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const connect = require("./db");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startServer() {
    await connect();
    const { url } = await startStandaloneServer(server);
    console.log(`🚀 Server ready at ${url}`);
}

startServer();
