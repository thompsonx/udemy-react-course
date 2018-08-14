import * as React from 'react';

import './CounterControl.css';

export interface ICounterControlProps
{
    clicked: any;
    label: string;
}

const counterControl = (props: ICounterControlProps) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;