import { useState } from 'react'; // Importing useState hook from React
import './App.css'; 
import CustomForm from './components/CustomForm'; 
import TaskList from './components/TaskList'; 

function App() {
  // Defining 'tasks' state to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task to the 'tasks' state
  const addTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the existing tasks
  };

  // Function added to delete tasks
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  // Function to toggle the checked state of a task
  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id ? { ...t, checked: !t.checked } : t
    )))
  }

  return (
    <div className="container"> {/* Main container for the app */}
      <header> 
        <h1>My Task List</h1> 
      </header>
      {/* Rendering the CustomForm component and passing 'addTask' function as a prop */}
      <CustomForm addTask={addTask} />
      
      {/* Conditionally render the TaskList component only if there are tasks */}
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>}
    </div>
  );
}

export default App; 
