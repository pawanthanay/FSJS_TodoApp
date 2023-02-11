import React, { useState } from "react";
import axios from "axios";

export const Todos = () => {

    // To Store the value from Frontend
    const [uTodo, setTodo] = useState("");
    console.log(uTodo);
  
    // Function to send the Data
    const submitData = async () => {
      const data = {
        todo: uTodo,
      };
      const res = await axios.post("/addTodo", data);
      console.log(res);
    };

    // To handle the Default
    const handleSubmit = (event) => {
    event.preventDefault();
    // To submit the Data
    submitData();
    // But Empty the previous Details
    setTodo("");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-indigo-600">
                        My Todo
                    </h1>
                </div>
                <div className="flex justify-center">

                    {/* <div class="w-2/5 border-2 border-indigo">right</div> */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-2/5 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={uTodo}
                      onChange={(event) => setTodo(event.target.value)}
                    />
                    <div className="w-0.10/5 ml-4">
                      <button
                        type="submit"
                        className="flex mx-auto text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Add
                      </button>
                      
                    </div>
                    
                </div>

            </div>

        </section>
      </form>
    </div>
  );
};
