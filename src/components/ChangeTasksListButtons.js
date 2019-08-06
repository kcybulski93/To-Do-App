import React from 'react';
import './styles/ChangeTasksListButtons.css'
import styled from 'styled-components'

const ChangeTasksListButtons = (props) => {

  const Button = styled.button`
    background: #EAEBEF;
    `;

  return (
    <>
      <div className="ChangeTasksListButtons">
        <button onClick={() => props.change(false)} className="to-do">Tasks-to-do</button>
        <Button onClick={() => props.change(true)} className="completed">Completed-tasks</Button>
      </div>
    </>
  );
}
export default ChangeTasksListButtons;