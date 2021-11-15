import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  return (
    <div>
      <NavBar />
      <TodoContainer />
    </div>
  );
}

export default App;