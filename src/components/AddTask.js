import './styles/AddTask.css';
import React, { Component } from 'react';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: '',
    checked: false,
    date: this.minDate
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleAddClick = () => {
    const { text, checked, date } = this.state;
    const add = this.props.addTask(text, date, checked);
    if (add) {
      this.setState({
        text: '',
        checked: false,
        date: this.minDate
      })
    }
  }

  handleClearClick = () => {
    this.setState({
      text: '',
    })
  }

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <>
        <div style={{ clear: "both" }} > </div>
        <div className="AddTask">
          <input className="text" type="text" placeholder="Add new task..." value={this.state.text} onChange={this.handleText} />
          <button className="add" onClick={this.handleAddClick}>Add</button>
          <button className="clear" onClick={this.handleClearClick}>Clear</button>
          <br />
          <input className="date" type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
          <label className="date-label" htmlFor="date">Deadline</label>
          <input className="checkbox" type="checkbox" id="important" checked={this.state.checked} onChange={this.handleCheckbox} />
          <label htmlFor="important">Priorytet</label><br />
        </div>
      </>
    );
  }
}

export default AddTask;
