import React, { Component } from 'react';
import './App.css';
import LangButtons from './components/LangButtons';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ChangeTasksListButtons from './components/ChangeTasksListButtons';
import ToDoTasksList from './components/ToDoTasksList';
import ComplTasksList from './components/ComplTasksList';
import Footer from './components/Footer';

class App extends Component {
  counter = 2
  state = {
    changeTasksList: false,
    tasks: [
      { id: 0, text: 'zagrać wreszcie w Wiedźmina 3', date: '2018-02-15', priority: true, active: true, finishDate: null },
      { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', priority: false, active: true, finishDate: null },
    ]
  }

  addTask = (text, date, priority) => {
    const task = {
      id: this.counter,
      text,
      date,
      priority,
      active: true,
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
  }

  changeTasksList = (changeTasksList) => {
    this.setState({
      changeTasksList
    })
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = this.state.tasks.slice()
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <LangButtons />
        <AddTask addTask={this.addTask} />
        <ChangeTasksListButtons change={this.changeTasksList} />
        {this.state.changeTasksList ? <ComplTasksList tasks={this.state.tasks} deleteTask={this.deleteTask} /> :
          <ToDoTasksList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTaskStatus={this.changeTaskStatus} />
        }
        < Footer />
      </div >
    );
  }
}

export default App;