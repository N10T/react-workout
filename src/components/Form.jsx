import { Component } from "react";
import "../styles/form.css";
export default class Form extends Component {

    render() {
    return (
      <div>
        <h1 className="text-center">My student form</h1>
        <form className="card">
          <div>
            <label>username</label>
            <input
              type="text"
              placeholder="jeromedu77"
            />
          </div>
          <div>
            <label>password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label>picture link</label>
            <input
              type="text"
              name="pictureLink"
            />
          </div>
          <button className="btn submit">Submit</button>
        </form>
      </div>
    );
  }
}
