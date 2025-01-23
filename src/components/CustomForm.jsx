// Import necessary hooks and components
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

// CustomForm component to add a new task
const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState(""); // Manage input value

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({ name: task, checked: false, id: Date.now() }); // Add task
    setTask(""); // Clear input after submit
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)} // Update task value
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">Enter Task</label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon /> {/* Icon for button */}
      </button>
    </form>
  );
};

export default CustomForm;
