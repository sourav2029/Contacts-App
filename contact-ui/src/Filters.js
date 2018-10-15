import React, { Component } from 'react';


export default class Filters extends Component {
    render() {
        const onChange = this.props.onChange;
        return (
                <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" id="name" name="nameFilter" value={this.props.nameFilter}
                                   placeholder="Name" className="form-control" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="text" id="email" name="emailFilter" value="" placeholder="Email"
                                   className="form-control" value={this.props.emailFilter} onChange={onChange}/>
                        </div>
                    </div>
                </div>
        )
    }

}

