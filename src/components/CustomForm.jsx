// Import the useState hook from React
import { useState } from 'react';

// Import the PlusIcon component from the Heroicons library
import { PlusIcon } from '@heroicons/react/24/solid'

// Define the CustomForm component, which accepts an `addTask` function as a prop
const CustomForm = ({ addTask }) => {
  // State to manage the task input field value
  const [task, setTask] = useState("");

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Call the addTask function with a new task object
    addTask({
      name: task,        // Task name
      checked: false,    // Initial checkbox state (unchecked)
      id: Date.now()     // Unique ID using the current timestamp
    });
    setTask(""); // Clear the input field after submission
  }

  return (
    // Form element for adding a task
    <form
      className="todo"
      onSubmit={handleFormSubmit} // Trigger handleFormSubmit on form submission
      >
      <div className="wrapper">
        {/* Input field for entering a task */}
        <input
          type="text"
          id="task"
          className="input" // CSS class for styling
          value={task} // Controlled component tied to `task` state
          onInput={(e) => setTask(e.target.value)} // Update state on input
          required // Make the field mandatory
          autoFocus // Autofocus the input when the form loads
          maxLength={60} // Limit input to 60 characters
          placeholder="Enter Task" // Placeholder text for the input
        />
        {/* Label for the input field */}
        <label
          htmlFor="task"
          className="label" // CSS class for styling
        >Enter Task</label>
      </div>
      {/* Submit button with an icon */}
      <button
        className="btn" // CSS class for styling
        aria-label="Add Task" // Accessibility label for the button
        type="submit" // Button type is submit
        >
        <PlusIcon /> {/* Render the PlusIcon from Heroicons */}
      </button>
    </form>
  )
}

// Export the CustomForm component for use in other parts of the application
export default CustomForm;
