const mongoose = require("mongoose");
const slugify = require("slugify");

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Every Algorith must have a name"],
    },
    code: {
        cpp: {
            type: String,
            required: [true, "Every Algorith must be written in C++"],
        },
        javascript: {
            type: String,
            required: [true, "Every Algorith must be written in javascript"],
        },
        python: {
            type: String,
            required: [true, "Every Algorith must be written in python"],
        },
        java: {
            type: String,
            required: [true, "Every Algorith must be written in java"],
        },
        readme: {
            type: String,
            required: [true, "Every Algorith should have a readme"],
        },
    },
    slug: String,
});

schema.pre("save", function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Algo = mongoose.model("algo", schema);
module.exports = Algo;
