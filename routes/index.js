const router = require('express').Router();
const TodoList = require("../database/models/todoList.model");
const {
    todoCreate,
    todoDelete,
    todoGet,
    todoUpdate,
    todoDone
} = require("../controllers/todo.controller");


router.get('/', todoGet)
router.delete('/delete/:todoId', todoDelete)
router.post('/', todoCreate);
router.post('/done', todoDone);
router.post('/update', todoUpdate);


module.exports = router