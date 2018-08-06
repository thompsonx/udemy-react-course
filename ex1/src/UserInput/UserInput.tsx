import * as React from 'react';
import './UserInput.css';

export interface IUserInputProps
{
    value: string;
    handleChange(event: any): void;
}

export class UserInput extends React.Component<IUserInputProps, {}>
{
    public render()
    {
        return (
            <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        );
    }
}