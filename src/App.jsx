import { useState } from "react"; 
import "./App.css";
import CustomForm from "./components/CustomForm"; 
import TaskList from "./components/TaskList"; 

function App() {
  const [tasks, setTasks] = useState([]); 
  const [previousFocusEl, setPreviousFocusEl] = useState(null); // State to track previously focused element
  const [editedTask, setEditedTask] = useState(null); // State for currently edited task
  const [isEditing, setIsEditing] = useState(false); // State to check if in editing mode

  const addTask = (task) => { 
    setTasks([...tasks, task]); 
  };

  const deleteTask = (id) => { 
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => { 
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => { 
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode(); 
  };

  const closeEditMode = () => { // Function to exit edit mode
    setIsEditing(false);
    previousFocusEl.focus(); // Restore focus to previous element
  };

  const enterEditMode = (task) => { 
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement); // Save current focused element
  };

  return (
    <div className="container"> 
      <header>
        <h1>My Task List</h1> 
      </header>
      {isEditing && ( 
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} /> {/* CustomForm for adding new tasks */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode} // Passing task functions to TaskList
        />
      )}
    </div>
  );
}

export default App;
