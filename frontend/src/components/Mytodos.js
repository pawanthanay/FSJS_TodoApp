import React, { useState, useEffect } from "react";
import axios from "axios";
export const Mytodos = () => {
  const [uTodo, setTodo ] = useState(null);

  const fetchTodoData = async () => {
    const resp = await axios.get("/getTodo");
    console.log(resp);

    // if No users are there please dont set the values
    if (resp.data.mytodo.length > 0) {
        setTodo(resp.data.mytodo);
    }
  };

  useEffect(() => {
    fetchTodoData();
  }, [uTodo]);

  // EDIT
  const handleEdit = async (todo) => {
    const todoTask = prompt("Enter your new Todo");

    if (!todoTask) {
      alert("Please type your Todo");
    } else {
      const resp = await axios.put(`/editTodo/${todo._id}`, {
        todo: todoTask,

      });
      console.log(resp);
    }
  };

  // DELETE
  const handleDelete = async (todoId) => {
    const resp = await axios.delete(`/deleteTodo/${todoId}`);
    console.log(resp);
  };

  //Date


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="flex justify-center px-4 py-3 title-font tracking-wider font-semibold text-indigo-500 text-sm bg-gray-100 rounded-tl rounded-bl ">
                  TODO
                </th>
              </tr>
            </thead>
            <tbody>
              {uTodo &&
                uTodo.map((todos) => (
                  <tr>
                    <td className="px-4 py-3">{todos.todo}</td>
                    <td className="px-4 py-3">
                      <button
                        className="hover:text-green-500"
                        onClick={() => handleEdit(todos)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDelete(todos._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
