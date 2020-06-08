import React from 'react';

const Th = (props) => {
    return <th>{props.value}</th>;
}

const Td = (props) => {
    return <td>{props.value}</td>;
}

const Tr = (props) => {
    return (
        <tr>
            {props.values}
        </tr>
    );
}

// props: ordered array of values
const Head = (props) => {
    let element = [];
    props.values.forEach((val) => {
        element.push(<Th value={val} />);
    })

    return (
        <thead>
            <Tr values={element} />
        </thead>
    );
};

const Body = (props) => {
    const size = props.numCols;
    let count = 0;
    let data = [];
    let element = [];
    props.values.forEach((val) => {
        if(count < size){
            data.push(<Td value={val} />);
            count++;
        }
        if(count === size){
            count = 0;
            element.push(<Tr values={data} />);
            data = [];
        }
    })
    return (
        <tbody>
            {element}
        </tbody>
    );
};

const ViewTable = () => {
    //// Should be passed in ////
    const headValues = ['ID', 'C1', 'C2', 'C3', 'C4', 'C5'];
    const bodyValues = [];
    for(let i=0; i < 61; i++){
        bodyValues.push('null');
    }
    /////////////////////////////
    
    return (
        <table>
            <Head values={headValues} />
            <Body numCols={6} values={bodyValues} />
        </table>
    );
};

export default ViewTable;