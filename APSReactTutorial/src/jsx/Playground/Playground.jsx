import React, { Fragment, useState, useEffect } from 'react';
import * as api from 'api/CalendarsRepository';
import { useGetApi } from 'sharedHooks';
import { Table } from 'react-bootstrap';

const Playground = () => {
    // const [calendars, setCalendars] = useState([]);

    // const fetchCalendars = () => {
    //     api.getCalendars()
    //     .then(res => setCalendars(res))
    //     .fail(err => console.error(err))
    // }

    // useEffect(() => {
    //     fetchCalendars();
    // }, [setCalendars])

    const calendars = useGetApi(api.getCalendars);
    
    const buildCalendars = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                   { 
                        calendars.map((calendar) => {
                            return (
                                <tr>
                                    <td>{calendar.ID}</td>
                                    <td>{calendar.Title}</td>
                                    <td>{calendar.StartDate}</td>
                                    <td>{calendar.EndDate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    }

    // Element representing a user defined component
    const element = <Goodbye name="Brandon" />;

    // User defined component
    function Goodbye(props) {
        return <h1>Goodbye, {props.name}</h1>;
    }

    // Component composition
    function GoodbyeAll() {
        return (
            <div>
                <Goodbye name="Brandon" />
                <Goodbye name="Matt" />
            </div>
        );
    }

    return (
        <Fragment>
            {GoodbyeAll()}
        </Fragment>
    );
};

const obj1 = {};

function toggleCalendar(){
    $(document).ready(() => {
        $('#calendar').toggle();
    });

    let strMessage = document.getElementById('btnSpan').innerHTML;
    strMessage = strMessage === 'Hide Calendar' ? 'Show Calendar' : 'Hide Calendar';
    $("#btnSpan").text(strMessage);
}

const addCalandar = (calendar) => {
    api.postCalendar(calendar);
};

const deleteById = (id) => {
    api.deleteCalendar(id);
};

function deepCompare(object1, object2) {
    let equal = require('deep-equal');
    return equal(object1, object2);
};

// Arg - array or object
// Returns true if there are no key/value pairs assigned
const isEmpty = (obj) => {
    let count = 0;
    for(let x in obj){
        count++;
    }
    if(count === 0)
        return true;
    return false;
};

// Arg: string - email address
// Return: true if email is valid, false otherwise
// Note: regex for email validation found at 
//  https://www.w3resource.com/javascript/form/email-validation.php
const validateEmail = (emailAddressTxt) => {
    if(typeof emailAddressTxt === 'string'){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailAddressTxt.match(regex)){
            return true;
        }
    }
    return false;
};

export default  Playground;