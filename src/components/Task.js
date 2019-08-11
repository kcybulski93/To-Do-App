import React from 'react';
import './styles/Task.css';

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { text, date, id, active, priority, finishDate } = props.task;

  if (active) {
    return (
      <>
        <div className='toDoTask'>
          <div className='content'>
            <h4 style={priority ? style : null}>{text}</h4>
          </div>
          <div className='deadline'>
            <h4> {date} </h4>
          </div>
          <button onClick={() => props.change(id)}><i class="icon-ok"></i></button>
          <button onClick={() => props.delete(id)}><i class="icon-trash"></i></button>
          <div style={{ clear: "both" }} > </div>
        </div>
        <div style={{ clear: "both" }} > </div>
      </>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()

    return (
      <>
        <div className='completedTask'>
          <div className='content'><h4>{text}</h4> <p>- confirmation of performance {finish}</p> </div>
          <div className='deadline'><h4>{date}</h4></div>
          <button onClick={() => props.back(id)}><i class="icon-ccw"></i></button>
          <button onClick={() => props.delete(id)}><i class="icon-trash"></i></button>
          <div style={{ clear: "both" }} > </div>
        </div>
        <div style={{ clear: "both" }} > </div>
      </>

    )
  }
}

export default Task;