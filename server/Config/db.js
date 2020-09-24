const mongoose = require("mongoose");
module.exports = function () {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((db) =>
            console.log(
                "Connected to db =>",
                db.connections[0]._connectionString
            )
        )
        .catch((err) => {
            console.log(err);
            throw new Error("Error connecting to DB");
        });
};
