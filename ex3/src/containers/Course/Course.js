import React, { Component } from 'react';

class Course extends Component {
    render () {

        let queries = new URLSearchParams(this.props.location.search);
        let title = null;
        for (let p of queries.entries())
        {
            title = p[1];
            break;
        }

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;