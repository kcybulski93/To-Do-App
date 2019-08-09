import React, { Component } from 'react';
import ToDoApp from './ToDoApp';
import Login from './Login';

class App extends Component {

    state = {
        login: true,
        name: "",
        surname: ""
    }

    addUser = (name, surname) => {
        this.setState({
            login: false,
            name,
            surname
        })
    }

    render() {
        const { login, name, surname } = this.state;
        return (
            login ? <Login add={this.addUser} /> : <ToDoApp name={name} surname={surname} />
        );
    }
}

export default App;