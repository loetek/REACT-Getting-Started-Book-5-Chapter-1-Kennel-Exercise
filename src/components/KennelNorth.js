import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./Locations/LocationList" 
import DaysOpen from "./Days/DaysOpen" 
 // Import EmployeeList component

export default class KennelNorth extends Component {
    render() {
        return (
            <div>
                <h1>Student Kennels North</h1>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList />
                <DaysOpen />
                <LocationList />
            </div>
        );
    }

}