import React from "react";
import "../styles/card.css";


function Card(props) {
  console.log(props.student);
  return (
    <div className="card">
      <img
        src={
          props.student.pictureLink
            ? props.student.pictureLink
            : "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
        }
        alt="username"
      />
      <div className="content">
        <h1>{props.student.username}</h1>
        <p>password : {props.student.password ? "ok" : "not ok"}</p>
        <button className="btn delete" onClick={()=>props.deleteStudent(props.index)}>DELETE</button>
      </div>
    </div>
  );
}
export default Card;
