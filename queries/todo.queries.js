const Todo = require("../database/models/todoList.model");

exports.createTodoList = (todoList) => {
    console.log(todoList)
    const newTodo = new Todo(todoList);
    return newTodo.save();
};
exports.deleteTodoList = (todoId) => {
    return Todo.findByIdAndDelete(todoId).exec();
}
exports.getTodoList = () => {
    return Todo.find({ done: false }).exec()
};
exports.getTodoListDone = () => {
    return Todo.find({ done: true }).exec()
};
exports.updateTodoList = (title, todoId) => {

    return Todo.findByIdAndUpdate(
        todoId,
        { $set: { 'title': title } },
    )
},
    exports.updateDoneTodoList = (todoId, todoDone) => {

        return Todo.findByIdAndUpdate(
            todoId,
            { $set: { 'done': todoDone } },
        )
    }


