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

  const lastDone = done.find(task => !task.active);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.deleteTask} change={props.changeTaskStatus} />)
  const lastDoneTask = lastDone ? <Task key={lastDone.id} task={lastDone} delete={props.deleteTask} change={props.changeTaskStatus} back={props.back} /> : <p>Nic nie zrobiłeś, Ty leniu!</p>

  return (
    <>
      <div style={{ clear: "both" }} > </div>
      <div className='ToDoTasksList'>
        {activeTasks}
      </div>
      <div>Last Done Task</div>
      <div>
        {lastDoneTask}
      </div>
    </>
  );
}

export default ToDoTasksList;

