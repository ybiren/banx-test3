import React from 'react';
import './App.css';
import TasksList from './components/tasksList'; 
import 'bootstrap/dist/css/bootstrap.css';
import TasksHeader from './components/tasksHeader/tasksHeader'; 


function App() {
  return (
    <div class="container">
      <TasksHeader></TasksHeader>
      <TasksList></TasksList>
    </div>
  );
}

export default App;
