import React, {Component} from 'react';
import './TasksList.scss'
import {TaskStates, TASK_NOT_STARTED, TASK_DONE} from '../../models/taskStates'
import AddTask from '../addTask/AddTask';

export default class TasksList extends Component {
     
     constructor(props) {
         super(props);
         this.state = {};
     }
     
     componentWillMount() {
       const tasksArr = JSON.parse(localStorage.getItem('tasksArr')) || [];
       this.setState({tasksArr: tasksArr});
       
       window.addEventListener("beforeunload", (event)=> {
        localStorage.setItem('tasksArr', JSON.stringify(this.state.tasksArr));
       });
     }
         

     addTask(taskDesc) {
       const tasksArr = this.state.tasksArr;
       const task = {txt: taskDesc, status: TASK_NOT_STARTED};
       // Add task to start of tasks list
       tasksArr.unshift(task);
       this.setState({tasksArr: tasksArr}); 
     }
     
     changeTaskState(event) {
        const ind = event.target.getAttribute('ind');
        const tasksArr = this.state.tasksArr;
        tasksArr[ind].status = event.target.value;
        // If task is done remove it to end of list
        if(tasksArr[ind].status === TASK_DONE) {
          const task = tasksArr.splice(ind,1);
          tasksArr.push(...task); 
        }
        this.setState({tasksArr: tasksArr}); 
     }

     renderTasksList() {
      
      return this.state.tasksArr.map((item,index) => {
        return <div class="row with-border">
          <div class="col-10">
            <div className={item.status === TASK_DONE ? "is-done" : ""}>{item.txt}</div>
          </div>
          <div class="col-2">
            <select ind={index} value={item.status} onChange={this.changeTaskState.bind(this)}>
            {Object.keys(TaskStates).map(key => (
             <option value={TaskStates[key].id}>
             {TaskStates[key].name}
             </option>
             ))}
           </select>
          </div>
        </div>
       })
     }

     render() {
       return <div> 
           <div class="row"> 
            <div class="col-12 centered">
              <AddTask addTaskCB={this.addTask.bind(this)}></AddTask>
            </div> 
           </div>
           {this.renderTasksList()} 
        </div>
    }
  }
