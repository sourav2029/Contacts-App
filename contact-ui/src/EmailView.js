import React, { Component } from 'react';


export default class EmailView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const emails = this.props.emails;
        if (emails.length > 0) {
            return (
                <td>{emails.map((email) => {
                    return email.email + " ( " + email.type + " ) ";
                })}</td>
            )
        } else {
            return (<td>NA</td>)
        }
    }
}

