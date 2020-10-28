import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import DirectoryTable from "./components/DirectoryTable";
import employee from "./employee.json";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <DirectoryTable />
      {employee.map(employee => <EmployeeCard key={employee.id} name={employee.name} phone={employee.phone} image={employee.image} email={employee.email} dob={employee.dob}/> )}

    </Wrapper>
  );
}

export default App;





