import React, { Component } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';





class SearchBar extends Component {
    
    handleInputChange = event => {
       event.preventDefault();
       
       const { value, name } = event.target
    
     this.setState(
         { [name]: value }
         
    );
};
    
    
    render() {
        return (
            <Form>
                <FormGroup>
                    <Input
                        type="search"
                        name="search"
                        id="searchFilter"
                        placeholder="Search Employee"
                    />
                    <Button>Search</Button>
                </FormGroup>
            </Form>
        );
    }
}


export default SearchBar;