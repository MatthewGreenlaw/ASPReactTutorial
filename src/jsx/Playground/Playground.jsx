import React, { Fragment, useState, useEffect } from 'react';
import * as api from '../../api/CalendarsRepository';

const Playground = () => {
    const [calendars, setCalendars] = useState([]);

    const fetchCalendars = () => {
        api.getCalendars()
        .then(res => setCalendars(res))
        .fail(err => console.error(err))
    }

    useEffect(() => {
        fetchCalendars();
    }, [setCalendars])
    
    const calendarElems = calendars.map((calendar) => {
        return `ID: ${calendar.ID}, Title: ${calendar.Title}, Start Date: ${calendar.StartDate} End Date: ${calendar.EndDate}`;
    });

    return (
        calendars && 
        <Fragment>
            <div style={{marginTop: '1em'}}>
                {calendarElems}
            </div>
        </Fragment>
    );
};

export default  Playground;