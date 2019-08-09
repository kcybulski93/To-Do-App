import React, { Component } from 'react';

class Login extends Component {

  state = {
    name: "",
    surname: ""
  }

  handleForSubmit = () => {
    const { name, surname } = this.state;
    this.props.add(name, surname)
    this.setState({
      name: "",
      surname: "",
    })
  }

  handleNameInput = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSurnameInput = (e) => {
    this.setState({
      surname: e.target.value
    })
  }

  render() {
    return (
      <>
        <div className="Login">
          <form onSubmit={this.handleForSubmit}>
            <input type="text" placeholder="Add your name..." value={this.state.name} onChange={this.handleNameInput}></input>
            <br />
            <input type="text" placeholder="Add your surname..." value={this.state.surname} onChange={this.handleSurnameInput}></input>
            <button type="submit">START</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;