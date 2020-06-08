import React, {Fragment} from 'react';

const ErrorText = (props) => {
    return (
        <div className="errorTxt">Error: {props.msg}</div>
    );
};

const InputGroupPrepend = (props) => {
    return (
        <div className="inputGroupPrepend">
            <InputGroupTitle title={props.title} />
        </div>
    );
};

const InputGroupTitle = (props) => {
    return (
        <span className="inputGroupTitle">{props.title}</span>
    );
}

const FormControl = (props) => {
    return (
        <div className="formControl">
            {props.input}
        </div>
    );
};

// props: title, error message, input element
const InputGroup = (props) => {
    return (
        <Fragment>
            <div className="inputGroup">
                <InputGroupPrepend title={props.title} />
                <FormControl input={props.input} />
            </div>
            {props.error && <ErrorText msg={props.errMsg} />}
        </Fragment>
    );
};

export default InputGroup;