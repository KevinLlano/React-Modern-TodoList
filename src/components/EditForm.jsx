import { useState, useEffect } from 'react'; 
import { CheckIcon } from '@heroicons/react/24/solid'; 

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  // State to manage the updated task name, initialized with the current task name
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  // Effect to close the modal when the Escape key is pressed
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode(); 
    };

    window.addEventListener('keydown', closeModalIfEscaped); // Add event listener for keydown

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped); // Cleanup event listener on unmount
    };
  }, [closeEditMode]);

  // Handles form submission, updates the task, and prevents default form behavior
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName }); 
  };

  return (
    <div
      role="dialog" // Accessibility role
      aria-labelledby="editTask" 
      onClick={(e) => { e.target === e.currentTarget && closeEditMode(); }} // Close modal when clicking outside the form
    >
      <form
        className="todo" 
        onSubmit={handleFormSubmit} // Handle form submission
      >
        <div className="wrapper">
          {/* Input for editing the task name */}
          <input
            type="text"
            id="editTask" 
            className="input" 
            value={updatedTaskName} 
            onInput={(e) => setUpdatedTaskName(e.target.value)} // Update state on input
            required 
            autoFocus 
            maxLength={60} 
            placeholder="Update Task" 
          />
          <label
            htmlFor="editTask" 
            className="label" 
          >
            Update Task
          </label>
        </div>
        {/* Submit button with an icon */}
        <button
          className="btn" 
          aria-label={`Confirm edited task to now read ${updatedTaskName}`} 
          type="submit" 
        >
          <CheckIcon strokeWidth={2} height={24} width={24} /> {/* Confirmation icon */}
        </button>
      </form>
    </div>
  );
};

export default EditForm; 