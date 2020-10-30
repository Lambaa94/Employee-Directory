import React, { Component } from 'react';
import { Table, Row, Col, Container } from 'reactstrap';
import EmployeeCard from "../EmployeeCard";
import employee from "../../employee.json";
import SearchBar from '../SearchBar';
import "./style.css";



const styles = {
   main: { paddingRight: 50,
    paddingTop: 50,
    paddingLeft: 50,
    margin: 20,
    paddingBottom: 40,
   },
   button: {
    paddingRight: 50,
    paddingTop: 50,
    paddingLeft: 50,
    margin: 20,
    paddingBottom: 40,
    border: "black",
    backgroundColor: "lavender",
    fontWeight: "bold"
   }
};


class DirectoryTable extends Component{
state = {
  employee: employee,
  sortOrder: "ASC",
  search: ""
}
handleClick = () => {
  
  
    let sortedEmp = this.state.employee.sort((a,b) => {
      if(a.name > b.name){
        return 1
      } else { return -1
      }
    })
    if(this.state.sortOrder === "ASC"){
      this.setState({
        sortOrder : "DSC",
        employee: sortedEmp
      });
  
    } else {
      this.setState({
        sortOrder : "ASC",
        employee: sortedEmp.reverse()
      });
     
    }
  
}

handleInputChange = event => {
event.preventDefault();
  

const { value, name } = event.target


const filteredEmployees = employee.filter(emp => emp.name.indexOf(value) > -1)


this.setState (
{ [name]: value,
employee: filteredEmployees }

    
);
};


render() {
return (
   <>
  
   <Container>   
                
   <SearchBar styles={{verticalAlign: "middle"}}name="search" handleInputChange={this.handleInputChange} value={this.state.search}/>
   
   
    <Table hover={true} style={styles.main}>
    
      <thead style={styles.main}>
        <tr style={styles.main}>
          <th style={styles.main}>Image</th>
          <button style={styles.button} onClick={() => this.handleClick()}>Name</button>
          <th style={styles.main}>Phone</th>
          <th style={styles.main}>Email</th>
          <th style={styles.main}>DOB</th>
        </tr>
      </thead>
      <tbody >
      {this.state.employee.map(employee => <EmployeeCard key={employee.id} id={employee.id} name={employee.name} phone={employee.phone} image={employee.image} email={employee.email} dob={employee.dob} />  )}
      </tbody>
    
    </Table>
    
    </Container>  
  </>
  );
}
}



export default DirectoryTable;




