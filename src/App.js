import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import DirectoryTable from "./components/DirectoryTable";
import SearchBar from "./components/SearchBar";
import EmployeeGrid from './components/EmployeeGrid';

function App() {
  return (
    <>
    <Wrapper>
      <Title>Employee Directory</Title>
      <SearchBar />
      </Wrapper>
      <br/>
      <EmployeeGrid>
      <DirectoryTable />
      </EmployeeGrid>
      </>
  );
};

export default App;





