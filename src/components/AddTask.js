import './AddTask.css';
import React from 'react';

const AddTask = () => {
  return (
    <>
      <div style={{ clear: "both" }} > </div>
      <div className="AddTask">
        <input className="text" type="text" placeholder="Add new task..." />
        <button className="add">Add</button>
        <button className="clear">Clear</button>
        <br />
        <input className="date" type="date" />
        <label className="date-label" htmlFor="date">Deadline</label>
        <input className="checkbox" type="checkbox" id="important" />
        <label htmlFor="important">Priorytet</label><br />
      </div>
    </>
  );
}

export default AddTask;