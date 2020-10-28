import React from "react";
import "./style.css";



function EmployeeCard(props) {
  return (
    <>
    <tbody>
    <br/>
    <tr>
      
    <th scope="row"><img src={props.image}></img></th>
          <td >{props.name}</td>
          <td >{props.phone}</td>
          <td >{props.email}</td>
          <td >{props.dob}</td>
          
    </tr>
    <br/>
    </tbody>
    </>
  );
}

export default EmployeeCard;


