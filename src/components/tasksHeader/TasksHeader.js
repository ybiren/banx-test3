import React from 'react';
import './TasksHeader.scss';


const TasksHeader = () => {
    
   
    return (
        <div class="row">
          <div class="col-2">
            <img src="images/icon.png" alt="tasks icon"/>
          </div>
          <div class="col-10 d-flex align-items-center"><div class="header"><h1>Tasks Management System</h1></div></div>   
        </div>
    );
  }
  
  export default TasksHeader;