import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <main>
        <Form />
        <div className="cards">
          <h1 className="text-center">My list of student</h1>
          <Card/>
        </div>
      </main>
    );
  }
}

export default App;
