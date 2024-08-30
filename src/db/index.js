const mongoose = require("mongoose");
const { MONGODB_URI, DB_NAME } = require("../config/database");

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("Database is already connected");
        return;
    }

    if (connectionState === 2) {
        console.log("Database is connecting ...");
        return;
    }

    mongoose
        .connect(MONGODB_URI, {
            dbName: DB_NAME,
        })
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.log("Database connection error", err);
            throw new Error("DatabaseConnectionError: ", err);
        });
};

module.exports = connect;
