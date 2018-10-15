import React, { Component } from 'react';


export default class PhoneView extends Component {
    render() {
        const phones = this.props.phones;
        if (phones.length > 0) {
            return (
                <td>{phones.map((phone) => {
                    return JSON.stringify(phone);
                })}</td>
            )
        } else {
            return (<td>NA</td>)
        }
    }
}

