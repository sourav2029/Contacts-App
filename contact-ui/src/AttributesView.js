import React, { Component } from 'react';


export default class AttributesView extends Component {
    constructor(props) {
        super(props);
        this.isEmpty = this.isEmpty.bind(this);
    }

    isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return JSON.stringify(obj) === JSON.stringify({});
    }

    render() {
        const attributes = this.props.attributes;
        console.log(attributes);
        if (this.isEmpty(attributes)) {
            return (<td>NA</td>)
        } else {
            return (<td>{JSON.stringify(attributes)}</td>)
        }
    }

}

