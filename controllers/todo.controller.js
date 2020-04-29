const {
    getTodoList,
    createTodoList,
    deleteTodoList,
    updateTodoList,
    getTodoListDone,
    updateDoneTodoList
} = require("../queries/todo.queries");

exports.todoCreate = async (req, res, next) => {
    try {
        const title = req.body.title;
        await createTodoList({ title });
        res.redirect("/")
    } catch (e) {
        const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
        res
            .status(400)
    }
}
exports.todoGet = async (req, res, next) => {
    try {
        const todoList = await getTodoList()
        const todoListDone = await getTodoListDone()
        res.render("index", {
            todoList,
            todoListDone
        })
    }
    catch (e) {
        next(e);
    }
}
exports.todoDelete = async (req, res, next) => {
    try {
        console.log(req.params.todoId)
        const todoId = req.params.todoId;
        await deleteTodoList(todoId);
        const todoList = await getTodoList()
        res.render("index", {
            todoList
        })
    }
    catch (e) {
        next(e);
    }
}
exports.todoUpdate = async (req, res, next) => {
    try {
        const title = req.body.newTitle;
        const todoId = req.body.todoId;
        await updateTodoList(title, todoId)
        res.redirect("/")
    } catch (e) {
        const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
        res
            .status(400)
    }
}
exports.todoDone = async (req, res, next) => {
    try {
        const todoId = req.body.todoId;
        const todoDone = req.body.todoDone
        await updateDoneTodoList(todoId, todoDone)
        res.redirect("/")
    } catch (e) {
        const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
        res
            .status(400)
    }
}