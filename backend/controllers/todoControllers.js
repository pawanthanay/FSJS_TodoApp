const Todo = require("../models/todoModel");

exports.home = (req, res) => {
    res.send("Todo App");
};


exports.addTodo = async (req, res) => {
    try {
      const { todo } = req.body;
      // To check all the details 
      if (!todo) {
        throw new Error("Add Todo");
      }
      const todoExits = await Todo.findOne({ todo });
      if (todoExits) {
        throw new Error("Todo already exits");
      }
      
      // Inserting into the Database
      const mytodo = await Todo.create({ todo });
      res.status(201).json({
        success: true,
        message: "Todo added Successfully",
        mytodo,
      });
    } catch (error) {
      console.log(error);
    }
};


exports.editTodo = async (req, res) => {
    try {
      const mytodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "Todo updated Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const mytodo = await Todo.findByIdAndDelete(todoId);
        res.status(200).json({
          success: true,
          message: "Todo Deleted Successfully",
        });
      } catch (error) {
        console.log(error);
        res.status(401).json({
          success: false,
          message: error.message,
        });
      }
};


exports.getTodo = async (req, res) => {
    try {
      const mytodo = await Todo.find();
      res.status(200).json({
        success: true,
        mytodo,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
};