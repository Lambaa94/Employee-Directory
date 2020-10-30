import React from "react";
import "./style.css";


const styles = {
  paddingRight: 50,
  paddingTop: 10,
  paddingLeft: 50,
  margin: 20,
  paddingBottom: 10,
 
};

function EmployeeCard(props) {
  return (
    <>
  
    <tr scope="row">
          <td style={styles}>
          <img src={props.image} ></img></td>
          <td >{props.name}</td>
          <td >{props.phone}</td>
          <td >{props.email}</td>
          <td >{props.dob}</td>
    </tr>
    
    </>
  );
}

export default EmployeeCard;


