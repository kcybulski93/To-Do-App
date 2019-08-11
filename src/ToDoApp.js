import React, { Component } from 'react';
import './ToDoApp.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ToDoTasksList from './components/ToDoTasksList';
import ComplTasksList from './components/ComplTasksList';
import Footer from './components/Footer';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

class ToDoApp extends Component {
  counter = 2
  state = {
    developerName: '',
    tasks: [
      { id: 0, text: 'Nauczyć się React.JS', date: '2019-08-07', priority: true, active: true, finishDate: null },
      { id: 1, text: 'Nauczyć się TypeScript', date: '2019-11-12', priority: false, active: true, finishDate: null },
    ]
  }

  componentDidMount() {
    fetch("data.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          developerName: result.name
        })
      })
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

  restoreTask = (id) => {
    const tasks = this.state.tasks.slice()
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = true;
        task.finishDate = null;
      }
    })
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <header>
            {<Header name={this.props.name} surname={this.props.surname} />}
          </header>
          <main>
            <section>
              {<AddTask addTask={this.addTask} />}
            </section>
            <section>
              <nav className="Nav">
                <NavLink to="/to-do" activeClassName="news_selected" className="ToDoTasksButton">To-Do-Tasks</NavLink>
                <NavLink to="/completed" activeClassName="news_selected" className="CompletedTasksButton">Completed-Tasks</NavLink>
              </nav>
              <Switch>
                <Route path="/to-do" component={() => <ToDoTasksList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTaskStatus={this.changeTaskStatus} back={this.restoreTask} />} />
                <Route path="/completed" component={() => <ComplTasksList tasks={this.state.tasks} deleteTask={this.deleteTask} back={this.restoreTask} />} />
                <Route component={() => <ToDoTasksList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTaskStatus={this.changeTaskStatus} back={this.restoreTask} />} />
              </Switch>
            </section>
          </main>
          <footer>
            {<Footer name={this.state.developerName} />}
          </footer>
        </div >
      </Router >
    );
  }
}

export default ToDoApp;