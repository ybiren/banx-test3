import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './AddTask.scss'




const AddTask = props => {
    
    const createNewTask = () => {
      const newTaskText = document.querySelector("#txtTaskDesc").value.trim();
      if(!newTaskText) {
        alert("Task description is empty.");
      } else {
        props.addTaskCB(newTaskText);
        setShow(false);
      }
    }

    const [show, setShow] = useState(false);
  
    return (
        <div>
        <Button id="btnCreateNewTask" onClick={() => setShow(true)}>Create New Task</Button>
        
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="creare-new-task-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
            Create New Task 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <div>Task:</div>
             <div><input id="txtTaskDesc" class="form-control" type="text" /></div>    
             <button onClick={createNewTask} >Add</button>
          </Modal.Body>
        </Modal>
        </div>
    );
  }
  

  export default AddTask;