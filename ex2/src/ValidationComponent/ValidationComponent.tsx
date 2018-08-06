import * as React from "react";

export interface IValidationComponentProps
{
    lenght: number;
}

export class ValidationComponent extends React.Component<IValidationComponentProps, {}>
{
    public render()
    {
        return (
            <div>
            {this.props.lenght < 5 ? 
                "Text too short"
                :
                "Text long enough"
            }
            </div>
        )
    }
}