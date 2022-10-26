import React, { useState, useEffect } from "react";
//import start from "./Get_Assignment_Test/app";

function Table() {
  const [hwList, setHwList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/assignments").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setHwList(data);
      });
    });
  }, []);

  return (
    <table>
      <caption>TO-DO</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Class</th>
          <th scope="col">Completed</th>
          <th scope="col">In Progress</th>
          <th scope="col">Due By</th>
        </tr>
      </thead>
      <tbody>
        {hwList.map((assignment) => (
          <tr>
            <td>{assignment.name}</td>
            <td>{assignment.courseName}</td>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>{assignment.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
