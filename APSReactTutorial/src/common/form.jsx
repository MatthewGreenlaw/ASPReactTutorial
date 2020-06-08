import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from './inputGroup';
import Input from './input';

const FormButton = (props) => {
    let element;
    if (props.disabled) {
        element = <input type='button' value={props.text} disabled />
    } else {
        element = <input type='button' value={props.text} />
    }
    return element;
};
const InnerForm = () => {
    return (
        <Fragment>
            <InputGroup title='C1:' input={<Input type='text' placeholder="Text..." />} error={true} errMsg='Cannot leave text field blank.' />
            <InputGroup title='C2:' input={<Input type='checkbox' />} error={false} />
            <InputGroup title='C3:' input={<Input type='select' />} error={false} />
            <InputGroup title='C4:' input={
                <Fragment>
                    <Input type='radio' name='addC4Radio' />Option 1
                    <Input type='radio' name='addC4Radio' />Option 2
                </Fragment>
            } error={true} errMsg='Must choose one option.' />
            <InputGroup title='C5:' input={
                <Fragment>
                    <Input type='checkbox' />
                    <Input type='select' />
                </Fragment>
            } error={false} />
        </Fragment>
    );
};
const PanelForm = {
    AddForm: () => {
        return (
            <Form>
                <InnerForm />
                <FormButton type='add' text='Add' disabled={true} />
            </Form>
        );
    },

    UpdateForm: () => {
        return (
            <Form>
                <InputGroup title='Row:' input={<Input type='select' />} error={false} />
                <InnerForm />
                <FormButton type='update' text='Update' disabled={true} />
            </Form>
        );
    },
}

export default PanelForm;