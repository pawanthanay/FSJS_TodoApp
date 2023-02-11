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
  const [date] = useState(new Date().toDateString());

  //Timestamp
  

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-2xl text-xl font-semibold title-font text-indigo-400 underline underline-offset-8 " id="date">
                  Todo - {date}
              </h1>
          </div>

          <div className="flex justify-center">
            <div>
              {uTodo &&
                  uTodo.map((todos) => (

                    <div className="flex flex-row flex-wrap">
                      <div className="flex-initial w-64 mt-6 text-xl ">
                        
                        
                        {todos.todo} 
              
                      
                      </div>
                      <div className="mt-6">
                        <button
                          className="flex mx-auto text-white bg-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                          onClick={() => handleEdit(todos)}
                          >
                          Edit
                        </button>
                      </div>
                      <div className="ml-4 mt-6">
                        <button
                          className="flex mx-auto text-white bg-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                          onClick={() => handleDelete(todos._id)}
                          >
                          Done
                        </button>

                      </div>
                    </div>

            ))}    
          </div>
              

          </div>      
          

        </div>
      </div>
    </section>
  );
};
