import React from 'react';
import './styles/Task.css';

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { text, date, id, active, priority, finishDate } = props.task;

  if (active) {
    return (
      <div className='toDoTask'>
        <div className='content'><h4 style={priority ? style : null}>{text}</h4></div>
        <div className='deadline'>  - do <span> {date} </span> </div>
        <button onClick={() => props.change(id)}>Completed</button>
        <button onClick={() => props.change(id)}>Edit</button>
        <button onClick={() => props.delete(id)}>Delete</button>
      </div>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()

    return (
      <div className='completedTask'>
        <div className='content'><h4>{text}</h4> <p>- potwierdzenie wykonania {finish}</p> </div>
        <div className='deadline'><h5>(zrobić do {date})</h5></div>
        <button onClick={() => props.back(id)}>Back</button>
        <button onClick={() => props.delete(id)}>Delete</button>
      </div>

    )
  } 
}
  
export  default Task;