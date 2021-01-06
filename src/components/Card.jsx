import React from "react";
import "../styles/card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img
        src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
        alt="username"
      />
      <div className="content">
        <h1>"username"</h1>
        <p>password "ok" or "not ok"</p>
        <button className="btn delete" >
          DELETE
        </button>
      </div>
    </div>
  );
}
