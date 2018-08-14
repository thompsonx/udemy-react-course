import * as React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

export interface ICounterProps
{
    ctr: number;
    onIncrementCounter(): void;
    onDecrementCounter(): void;
    onAddCounter(num: number): void;
    onSubtractCounter(num: number): void;
}

interface ICounterState
{
    counter: number;
}

export class Counter extends React.Component<ICounterProps, ICounterState> {
    public state = {
        counter: 0
    }

    public counterChangedHandler = ( action: string, value: number ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => ({ counter: prevState.counter + 1 }) )
                break;
            case 'dec':
                this.setState( ( prevState ) => ({ counter: prevState.counter - 1 }) )
                break;
            case 'add':
                this.setState( ( prevState ) => ({ counter: prevState.counter + value }) )
                break;
            case 'sub':
                this.setState( ( prevState ) => ({ counter: prevState.counter - value }) )
                break;
        }
    }

    public render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter.bind(this, 5)}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter.bind(this, 5)}  />
            </div>
        );
    }
}

const mapStateToProps = (state: ICounterState) => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: (num: number) => dispatch({type: 'ADD', value: num}),
        onSubtractCounter: (num: number) => dispatch({type: 'SUBTRACT', value: num})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);