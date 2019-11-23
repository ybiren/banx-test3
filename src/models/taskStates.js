const TASK_NOT_STARTED = "notStarted";
const TASK_IN_PROG = "inProg";
const TASK_DONE = "done";

 const TaskStates = {
     notStarted: {
      id: TASK_NOT_STARTED,
      name: "Not Started"
    },
    inProgress: {
      id: TASK_IN_PROG,
      name: "In Progress"
    },
    done: {
      id: TASK_DONE,
      name: "Done"
    }
  };

  module.exports = {
    TaskStates: TaskStates, 
    TASK_NOT_STARTED: TASK_NOT_STARTED,
    TASK_DONE: TASK_DONE
  };