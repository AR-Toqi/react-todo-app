import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    todos.splice(index,1);
    setTodos([...todos]);
    
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Todo App</h1>
      <div className="d-flex mb-3">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyPress}
          className="form-control me-2"
          placeholder="Enter your todo..."
        />
        <button onClick={handleAddTodo} className="btn btn-success">
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(index)} className="btn btn-danger">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

