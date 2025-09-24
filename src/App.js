//import React from "react";
import logo from "./logo.svg";
import Counter from "./Counter";
import Employee from "./Employee";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        <Employee firstName="Luka" lastName="P" age="12" />
        <Employee firstName="Nikola" lastName="P" age="12" />
        <Employee firstName="Zoran" lastName="P" age="12" />
        <Employee firstName="Milica" lastName="P" age="12" />
      </header>
    </div>
  );
}

export default App;
