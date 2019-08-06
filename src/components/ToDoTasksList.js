import React from 'react';
import './styles/ToDoTasksList.css';
import Task from './Task'

const ToDoTasksList = (props) => {

  const active = props.tasks.filter(task => task.active);

  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.deleteTask} change={props.changeTaskStatus} />)

  return (
    <>
      <div style={{ clear: "both" }} > </div>
      <div className='ToDoTasksList'>
        {activeTasks}
      </div>
    </>
  );
}

export default ToDoTasksList;

