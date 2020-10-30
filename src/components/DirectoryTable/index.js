import React, { Component } from 'react';
import { Table } from 'reactstrap';
import EmployeeCard from "../EmployeeCard";
import employee from "../../employee.json";
import SearchBar from '../SearchBar';
import "./style.css";



const styles = {
    paddingRight: 50,
    paddingTop: 50,
    paddingLeft: 50,
    margin: 20,
    paddingBottom: 40,
   
};



var sortOrder = "ASC"

class DirectoryTable extends Component{
state = {
  employee: employee,
  sortOrder: "ASC",
  search: ""
}
handleClick = () => {
  this.setState({ employee: this.state.employee.sort()})
    
     
  if(sortOrder === "ASC"){
    sortOrder = false;

  } else {
    sortOrder = true;
  employee.reverse();
  }
  
}

handleInputChange = event => {
event.preventDefault();
  

const { value, name } = event.target

  
const filteredEmployees = this.state.employee.filter(emp => emp.includes(this.state.search))
// search with filter?

this.setState (
{ [name]: value }

    
);
};


render() {
return (
   <>                         {/* on change or handleInputChange? */}
   <SearchBar name="search" onChange={this.handleInputChange} value={this.state.search} />
    <Table hover style={styles}>
    
      <thead style={styles}>
        <tr style={styles}>
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
  </>
  );
}
}



export default DirectoryTable;




