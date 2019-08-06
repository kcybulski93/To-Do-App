import React from 'react';
import './ChangeTasksListButtons.css'
import styled from 'styled-components'

const ChangeTasksListButtons = () => {

    const Button = styled.button`
    background: #EAEBEF;
    `;

    return (
        <>
            <div className="ChangeTasksListButtons">
                <button className="to-do">Tasks-to-do</button>
                <Button className="completed">Completed-tasks</Button>
            </div>
        </>
    );
}

export default ChangeTasksListButtons;