import React, { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import ViewTable from '../../common/viewTable';
import PanelForm from '../../common/form';

const Column = (props) => {
    let colClass = "col " + props.classes;
    return (
        <div className={colClass}>
            <div className="colTitle">{props.name/* Add, View, or Update */}</div>
            {props.body/* This is the form or table */}
        </div>
    );
};

const Practice = () => (
    <Fragment>
        <Container fluid>
            <Row>
                <h1>Welcome to the Practice Ground!</h1>
            </Row>
        </Container>
        <Container>
            {/* Navigation Tabs */}
            <div className="row">
                <span className="tab">Add</span>
                <span className="tab tabAppend">Update</span>
                <span className="tab tabAppend">View</span>
            </div>
            {/* Add View */}
            <div className="row panel">
                {/* Add Column */}
                <Column name="Add" classes="infoCol-3" body={<PanelForm.AddForm />} />
                {/* View Column */}
                <Column name="View" classes="infoCol-9" body={<ViewTable />} />
            </div>
            {/* Update View */}
            <div className="row panel">
                {/* Update Column */}
                <Column name="Update" classes="infoCol-3" body={<PanelForm.UpdateForm/>} />
                {/* View Column */}
                <Column name="View" classes="infoCol-9" body={<ViewTable/>} />
            </div>
            {/* View */}
            <div className="row panel">
                <Column name="View" classes="infoCol" body={<ViewTable />} />
            </div>
        </Container>
    </Fragment>
);

export default Practice;