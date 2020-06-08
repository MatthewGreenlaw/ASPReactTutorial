import React from 'react';

// Fill out rest of input types
const Input = (props) => {
    let element;
    switch (props.type) {
        case 'text':
            element = <input type='text' placeholder={props.placeholder} value={props.value}></input>
            break;
        case 'checkbox':
            element = <input type='checkbox'></input>
            break;
        case 'radio':
            element = <input type='radio' name={props.name}></input>
            break;
        case 'select':
            element = <select></select>
            break;
        default:
            element = <div></div>
            break;
    }
    
    //element.setAttribute('id', props.id);
    return element;
};

export default Input;