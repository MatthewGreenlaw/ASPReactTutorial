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

    return (
        calendars && 
        <Fragment>
            <h1>Your Calendar:</h1>
            <div style={{marginTop: '1em'}}>
                {buildCalendars()}
            </div>
        </Fragment>
    );
};

export default  Playground;