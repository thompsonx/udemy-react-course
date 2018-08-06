import * as React from "react";

export interface ICharComponentProps
{
    char: string;
    click: any;
}

export class CharComponent extends React.Component<ICharComponentProps, {}>
{
    public render()
    {
        return (
            <div onClick={this.props.click}>{this.props.char}</div>
        );
    }
}