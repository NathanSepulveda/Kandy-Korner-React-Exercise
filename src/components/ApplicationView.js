import React, { Component } from "react"
import { Route } from 'react-router-dom'
import EmployeeList from "./employee/EmployeeList"
import StoreList from "./store/StoreList"
import CandyList from "./candy/CandyList"



class ApplicationViews extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeeArray = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    storeArray = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    candyTypeArray = [
        { id: 1, type: "chocolate" },
        { id: 2, type: "sour" },
        { id: 3, type: "salty" }
    ]

    candyArray = [
        { id: 1, name: "Reeses", candyTypeId: 1 },
        { id: 2, name: "Sour Patch Kids", candyTypeId: 2 },
        { id: 3, name: "Salt Peanuts", candyTypeId: 3 },
        { id: 4, name: "Snickers", candyTypeId: 1 }
    ]



    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }




    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}


export default ApplicationViews