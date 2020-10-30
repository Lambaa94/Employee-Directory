import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import "./style.css";




function SearchBar(props) {
 return (
        <Form>
            <FormGroup>
                <Input
                    onChange={props.handleInputChange}
                    value={props.search}
                    type="search"
                    name="search"
                    id="searchFilter"
                    placeholder="Search Employee"
                />
            </FormGroup>
        </Form>
    );

}


export default SearchBar;