import UseTodolist from "./Todolist";

const Todo = () => {
  const {
    task,
    setTask,
    todos,
    addTask,
    deleteTask,
    edit,
    setEdit,
    updateTask,
  } = UseTodolist();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>

        <label htmlFor="task" className="block mb-2 font-medium">
          Enter your task
        </label>

        <div className="flex gap-2">
          <input
            id="task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition add"
            onClick={edit !== null ? updateTask  : addTask }
          >
            {edit !== null ? "Save" : "Add"}
          </button>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">Tasks</h2>

          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-2"
            >
              <span>{todo.text}</span>

              <div className="flex justify-between gap-3">
                <button
                  onClick={() => deleteTask(todo.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>

                <button
                  className="bg-pink-500 hover:bg-pink-600 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setTask(todo.text);
                    setEdit(todo.id);
                  }}
                >
                  edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
