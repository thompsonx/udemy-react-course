import * as React from 'react';

import './CounterOutput.css';

export interface ICounterOutputProps
{
    value: number;
}

const counterOutput = (props: ICounterOutputProps) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;