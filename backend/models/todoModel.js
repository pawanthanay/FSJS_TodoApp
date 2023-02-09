const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: {
      type: String,
      require: [true, "Todo is Required"],
      maxlength: [25, "Todo must be 25 Ch Long"],
    },

  });
  
  module.exports = mongoose.model("Todo", todoSchema);