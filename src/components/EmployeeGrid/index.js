import React from "react";
import "./style.css"

function EmployeeGrid(props) {
    return <div className="eWrapper">{props.children}</div>;
}

export default EmployeeGrid;