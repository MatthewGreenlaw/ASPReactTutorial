import React, { Component } from 'react';

export default class ChildComponent extends React.Component {
    constructor(props){
        super(props);
        console.log('ChildComponent Constructor. Here are my props:', props);
    };

    state = {
        childStateValue: 0,
    };

    componentDidMount() {
        console.log('ChildComponent mounted. Setup doesnt happen until now.');
        // Do setup:
        //  - Call some API to initialize data
        //  - Subscribe to something
        //    ] websocket
        //    ] global state store (REDUX)
    };

    componentDidUpdate(prevProps, prevState) {
        //Note that these are shallow comparisons.
        const propsChanged = this.props.parentState !== prevProps.parentState;
        const stateChanged = this.state.childStateValue !== prevState.childStateValue;

        console.log('ChildComponent did update', {
            props: propsChanged ? {
                from: prevProps, 
                to: this.props,
            } : 'ChildComponent props stayed the same.',
            state: stateChanged ? {
                from: prevState,
                to: this.state,
            } : 'ChildComponent state stayed the same.'
        });
        
        // Do re-configuration:
        //  - Call some API with updated arguments

        //Note that you can use CSS to 'hide' components. Unhiding a hidden component does NOT re-mount them (they were never unmounted).
    };

    componentWillUnmount() {
        console.log('ChildComponent will unmount. Cleanup doesnt happen until now.')
        
        // Do cleanup:
        //  - Unsubscribe
        //  - Delete any references you think could cause a memory leak.

        //When you change showChild to false in the parent, it will unmount the child (was mounted, not mounted anymore => must have unmounted.)
        //Note that you can use CSS to 'hide' components. Hiding components does NOT unmount them.
    };

    render() {
        console.log('ChildComponent rendered');

        //Note that you can add logic in here in case you need to recaluclate things each render.
        const someComputedStuff = [1, 2, this.props.parentStateValue, this.state.childStateValue].map(val => val += 1);
        console.log('This data is recomputed each render', someComputedStuff);

        const callbacks = {
            updateChildState: () => {
                console.log('clicked child button'); 
                this.setState({
                    childStateValue: this.state.childStateValue + this.props.parentStateValue
                }, ()=>console.log('child setState async finished'))
            },
        };

        return (
            <div>
                <button onClick={() => callbacks['updateChildState']()}>Child State: {this.state.childStateValue}</button>
                <div>
                    This value is from the parent, but never changes in the parent, 
                    and we can't change props in a child, so it never changes: {this.props.someProp}
                </div>
            </div>
        );
    };
};

// import React, { useState, useEffect } from 'react';

// export default function ParentComponent(props) {
//     //Note usage of object deconstruction
//     const {
//         parentStateValue,
//         someProp,
//     } = props;
    
//     const [childState, setChildState] = useState({childStateValue: 0});

//     useEffect(() => {
//         //Note that there is no prevProps/prevState. That is handled by the second argument to useEffect: an array of 'dependencies'.
//         console.log('ChildComponent has either rendered or updated.', props);
//         setChildState({childStateValue: 0});
//         return () => {
//             console.log('ChildComponent unmounted. Cleanup doesnt happen until now.');
//         };
//     }, [props]);//Notice that we added a dependency array. This effect will run each time one of these updates. If we remove them, it will only run once (after first render);

//     const callbacks = {
//         updateChildState: () => {
//             console.log('clicked child button'); 
//             setChildState({
//                 childStateValue: childState.childStateValue + parentStateValue
//             }, () => console.log('child setState async finished'))
//         },
//     };

//     return (
//         <div>
//             <button onClick={() => callbacks['updateChildState']()}>Child State: {childState.childStateValue}</button>
//             <div>This value is from the parent, but never changes in the parent, and we can't change props in a child, so it never changes: {someProp}</div>
//         </div>
//     );
// };