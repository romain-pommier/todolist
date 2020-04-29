const mongoose = require("mongoose");
const schema = mongoose.Schema;

const todoListSchema = schema({
    title: {
        type: String,
        maxlength: [140, "trop long"],
        minlength: [1, "trop court"],
        required: [true, "Champ requis"],
    },
    done: {
        type: Boolean,
        default: false
    }
});

const TodoList = mongoose.model("todolist", todoListSchema);

module.exports = TodoList;