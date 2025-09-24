//import React from "react";
import logo from "./logo.svg";
import Counter from "./Counter";
import Employee from "./Employee";
import "./App.css";
const employeeInfo = [
  {
    firstName: "Luka",
    lastName: "P",
    age: 12,
    employeeId: "1",
  },
  {
    firstName: "Nikola",
    lastName: "P",
    age: 12,
    employeeId: "2",
  },
  {
    firstName: "Zoran",
    lastName: "P",
    age: 12,
    employeeId: "3",
  },
  {
    firstName: "Milica",
    lastName: "P",
    age: 12,
    employeeId: "4",
  },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map((employee) => {
          //const { firstName, lastName, age } = employee;
          return <Employee key={employee.employeeId} {...employee} />;
        })}
        {/*<Employee firstName="Luka" lastName="P" age="12" />
        <Employee firstName="Nikola" lastName="P" age="12" />
        <Employee firstName="Zoran" lastName="P" age="12" />
        <Employee firstName="Milica" lastName="P" age="12" />*/}
      </header>
    </div>
  );
}

export default App;
