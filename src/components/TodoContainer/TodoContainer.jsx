import React, { useState } from "react";
import "./TodoContainer.css";

function TodoContainer() {
  const [list, setList] = useState([]);
  const [currItem, setCurrItem] = useState("");

  function deleteHandler(value) {
    const newList = list.filter((item,index) => index !== value);
    setList(newList);
  }
  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          className="input"
          placeholder="Enter Items"
          value={currItem}
          onChange={(e) => setCurrItem(e.target.value)}
        />
        <button
          className="input-btn"
          onClick={() => {
            setList([...list, currItem]);
            setCurrItem("");
          }}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
      <div className="todo-item-container">
        {list.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input className="checkbox" type="checkbox" />
                <div>{item}</div>
              </div>
              <i
                onClick={() => deleteHandler(index)}
                className="far fa-trash-alt delete-icon"
              ></i>
            </div>
          );
        })}
      </div>
      {list.length ? (
        <div onClick={() => setList([])} className="delete-all-btn">
          Delete All
        </div>
      ) : null}
    </div>
  );
}

export default TodoContainer;
