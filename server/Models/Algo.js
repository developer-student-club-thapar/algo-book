const mongoose = require("mongoose");

const schema = new mongoose.Schema({});

const Algo = mongoose.model("algo", schema);
module.exports = Algo;
