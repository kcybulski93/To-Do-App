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
  state = {
    changetasksbuttons: true,
  }
  render() {
    return (
      <div className="App">
        <Header />
        <LangButtons />
        <AddTask />
        <ChangeTasksListButtons />
        {this.state.changetasksbuttons ? <ToDoTasksList /> : <ComplTasksList />}
        <Footer />
      </div>
    );
  }
}

export default App;