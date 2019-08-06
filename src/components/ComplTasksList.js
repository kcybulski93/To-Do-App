import React from 'react';
import './styles/ComplTasksList.css';
import Task from './Task';

const ComplTasksList = (props) => {

  const done = props.tasks.filter(task => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }
      if (a.finishDate > b.finishDate) {
        return -1
      }
      return 0
    })
  }

  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.deleteTask} change={props.change} />)

  return (
    <>
      <div style={{ clear: "both" }} > </div>
      <div className='ComplTasksList'>
        {doneTasks}
      </div>
    </>
  );
}

export default ComplTasksList;