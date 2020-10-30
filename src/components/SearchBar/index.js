import React from 'react';
import { Form, Input } from 'reactstrap';
import "./style.css";




function SearchBar(props) {
 return (
     
    
        <Form>
            
                <Input 
                    onChange={props.handleInputChange}
                    value={props.search}
                    type="search"
                    name="search"
                    id="searchFilter"
                    placeholder="Search Employee"
                />
            
        </Form>
      
    );

}


export default SearchBar;