// URL 
const express = require("express");
const router = express.Router();
const { 
    home,
    addTodo,
    editTodo,
    deleteTodo, 
    getTodo,
    

 } = require("../controllers/todoControllers");


router.get("/", home);
router.post("/addTodo", addTodo)
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getTodo", getTodo);
module.exports = router;