import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./Locations/LocationList" 
import DaysOpen from "./Days/DaysOpen" 
 // Import EmployeeList component

export default class KennelSouth extends Component {
    render() {
        return (
            <div>
                <h1>Student Kennels</h1>
                <h4>Nashville South Location</h4>
                <h5>10 Big Boa Blvd</h5>
                <EmployeeList />
                <DaysOpen />
                <LocationList />
            </div>
        );
    }

}