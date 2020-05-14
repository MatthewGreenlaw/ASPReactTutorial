import React, { Component } from 'react';
import ChildComponent from '../ChildComponent';

export default class ParentComponent extends Component {
    constructor(props){
        super(props);
        console.log('ParentComponent Constructor. Here are my props:', props);
    };

    state = {
        parentStateValue: 0,
        showChild: true,
    };

    componentDidMount() {
        console.log('ParentComponent mounted');
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('ParentComponent did update', {
            props: {
                from: prevProps, 
                to: this.props,
            },
            state: {
                from: prevState,
                to: this.state,
            }
        });
    };

    componentWillUnmount() {
        //you will probably never see this. The main component will unmount when you close the browser/change url.
        console.log('ParentComponent will unmount');
    };

    render() {
        console.log('ParentComponent rendered')
        const someConst = 'This is a constant variable';

        const callbacks = {
            updateParent: () => this.setState({
                parentStateValue: this.state.parentStateValue += 1
            }, () => console.log(`Updated parentStateValue to '${this.state.parentStateValue}'`)),
            toggleChild: () => this.setState({
                showChild: !this.state.showChild
            }, () => console.log(`Updated showChild to '${this.state.showChild}'`)),
        };

        return (
            <div>
                <button onClick={() => callbacks['updateParent']()}> 
                    Parent State: {this.state.parentStateValue}
                </button>
                <button onClick={() => callbacks['toggleChild']()}> 
                    Toggle child 
                </button>
                {
                    this.state.showChild && 
                    <ChildComponent parentState={this.state.parentStateValue} someProp={someConst}/>
                }
            </div>
        );
    };
};