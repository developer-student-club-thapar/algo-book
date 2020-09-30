const mongoose = require("mongoose");
const slugify = require("slugify");

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Every Data Structure must have a name"],
    },
    code: {
        cpp: {
            type: String,
            required: [true, "Every Data Structure must be written in C++"],
        },
        javascript: {
            type: String,
            required: [
                true,
                "Every Data Structure must be written in javascript",
            ],
        },
        python: {
            type: String,
            required: [true, "Every Data Structure must be written in python"],
        },
        java: {
            type: String,
            required: [true, "Every Data Structure must be written in java"],
        },
        readme: {
            type: String,
            required: [true, "Every Data Structure should have a readme"],
        },
    },
    slug: String,
});

dataSchema.pre("save", function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const DS = mongoose.model("ds", dataSchema);
module.exports = DS;
