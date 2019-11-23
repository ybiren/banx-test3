import React from 'react';
import './App.scss';
import TasksList from './components/tasksList'; 
import 'bootstrap/dist/css/bootstrap.css';
import TasksHeader from './components/tasksHeader/TasksHeader'; 


function App() {
  return (
    <div class="container">
      <TasksHeader></TasksHeader>
      <TasksList></TasksList>
    </div>
  );
}

export default App;
