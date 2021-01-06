import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

class App extends Component {
  state = {
    students: [],
  };

  addStudent = (student) => {
    this.setState({ students: [...this.state.students, student] });
  };
  deleteStudent = (index) => {
    const filteredArr =  this.state.students.filter((student, indexOld) => index !== indexOld)
    this.setState({ students: filteredArr});
  };
  render() {
    return (
      <main>
        <Form addStudent={this.addStudent} />
        <div className="cards">
          <h1 className="text-center">My list of student</h1>
          {this.state.students.length === 0 ? <h1>Sorry no students</h1> : this.state.students.map((student, index) => (
            <Card key={index} index={index} student={student} deleteStudent={this.deleteStudent} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
