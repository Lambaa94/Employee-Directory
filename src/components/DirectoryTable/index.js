import React, { Component } from 'react';
import { Table } from 'reactstrap';
import EmployeeCard from "../EmployeeCard";
import employee from "../../employee.json";



const styles = {
    paddingRight: 90,
    paddingLeft: 90,
    margin: 10,
    paddingBottom: 20
};

var orderASC = true;



class DirectoryTable extends Component{
state = {
  employee: employee
}
handleClick = () => {
  this.setState({ employee: this.state.employee.sort()})
  if(orderASC === true){
    orderASC = false;

  } else {
    orderASC = true;
  employee.reverse();
  }
  
}


render() {
return (
    <Table striped responsive>
      <thead>
        <tr>
          <th style={styles}>Image</th>
          <th style={styles} onClick={() => this.handleClick()}>Name</th>
          <th style={styles}>Phone</th>
          <th style={styles}>Email</th>
          <th style={styles}>DOB</th>
        </tr>
      </thead>
      <tbody>
      {this.state.employee.map(employee => <EmployeeCard key={employee.id} id={employee.id} name={employee.name} phone={employee.phone} image={employee.image} email={employee.email} dob={employee.dob}/> )}
      </tbody>
    </Table>
  );
}
}



export default DirectoryTable;


