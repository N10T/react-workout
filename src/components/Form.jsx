import { Component } from "react";
import "../styles/form.css";

class Form extends Component {
  state = {
    username: "",
    password: "",
    pictureLink: "",
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addStudent(this.state);
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My student form</h1>
        <form className="card" onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              placeholder="write yout username tho"
              name="username"
              onChange={(event) => this.handleInput(event)}
              value={this.state.username}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={(event) => this.handleInput(event)}
              value={this.state.password}
            />
          </div>
          <div>
            <label>picture link</label>
            <input
              type="text"
              name="pictureLink"
              onChange={(event) => this.handleInput(event)}
              value={this.state.pictureLink}
            />
          </div>
          <button className="btn submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
