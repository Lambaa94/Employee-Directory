import React from "react";
import "./style.css";



function EmployeeCard(props) {
  return (
    <>
    
    <tr scope="row">
          <td >
          <img src={props.image}></img></td>
          <td >{props.name}</td>
          <td >{props.phone}</td>
          <td >{props.email}</td>
          <td >{props.dob}</td>
    </tr>
    
    </>
  );
}

export default EmployeeCard;


