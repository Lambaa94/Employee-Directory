import React from "react";
import { Table } from 'reactstrap';
import EmployeeCard from "../EmployeeCard";
import employee from "../../employee.json";



const styles = {
    paddingRight: 90,
    paddingLeft: 90,
    margin: 10
};


function DirectoryTable(props){

return (
    <Table striped>
      <thead>
        <tr>
          <th style={styles}>Image</th>
          <th style={styles}>Name</th>
          <th style={styles}>Phone</th>
          <th style={styles}>Email</th>
          <th style={styles}>DOB</th>
        </tr>
      </thead>
    </Table>
  );
}




export default DirectoryTable;