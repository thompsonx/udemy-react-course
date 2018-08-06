import * as React from "react";

export interface IUserOutputProps
{
    username: string;
    info: string;
}

export class UserOutput extends React.Component<IUserOutputProps, {}>
{
    public render()
    {
        const style = {
            border: "1px solid #eee",
            padding: "10px",
            width: "25%"
        }
        return (
            <div style={style}>
                <p>{this.props.username}</p>
                <p>{this.props.info}</p>
            </div>
        );
    }
}