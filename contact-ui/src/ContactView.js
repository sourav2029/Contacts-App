import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import Filter from './Filters';
import EmailView from './EmailView';
import AttributesView from './AttributesView';
import PhoneView from './PhoneView';

export default class ContactView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isFetched: false,
            nameFilter: "",
            emailFilter: "",
            contacts: []
        };

        this.onFilterChange = this.onFilterChange.bind(this);
        this.fetchContacts = this.fetchContacts.bind(this);
        this.filterContacts = this.filterContacts.bind(this);
    }


    fetchContacts() {
        fetch('/contacts')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    isFetched: true,
                    contacts: myJson.data
                })
            }).catch(() => {
            this.setState({
                error: true
            })
        })
    };

    componentDidMount() {
        this.fetchContacts();
    }


    onFilterChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }


    filterContacts() {
        const contacts = this.state.contacts;
        const filteredContacts = contacts.filter((contact) => {
            if (contact.emails.length > 0 && this.state.emailFilter) {
                console.log("contact with emails : ", contact.emails);
                var passFilter = false;
                contact.emails.map((email) => {
                    if (email.email.toLowerCase().indexOf(this.state.emailFilter) >= 0) {
                        passFilter = true;
                    }
                });
                return passFilter;
            }

            if (contact.name && this.state.nameFilter)
                return contact.name.toLowerCase().search(this.state.nameFilter.toLowerCase()) !== -1;
            return true;
        });
        return filteredContacts;
    }

    render() {
        const isFetched = this.state.isFetched;
        const contactsToShow = this.filterContacts();
        const tableHeaders = (<thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Emails</th>
            <th>Attributes</th>
            <th>Phones</th>
        </tr>
        </thead>);

        const tableBody = contactsToShow.map((row) => {
            return (
                <tbody>
                <tr>
                    <td>{row.id}</td>
                    <td>{row.name} </td>
                    <EmailView emails={row.emails}/>
                    <AttributesView attributes={row.attributes}/>
                    <PhoneView phones={row.phones}/>
                </tr>
                </tbody>)
        });

        if (isFetched) {
            return (
                <Fragment>
                    <div className="infoContainer jumbotron">
                        <h2>Contact App</h2>
                    </div>
                    <Filter
                        nameFilter={this.state.nameFilter}
                        emailFilter={this.state.emailFilter}
                        onChange={this.onFilterChange}
                    />
                    <Table responsive>
                        {tableHeaders}
                        {tableBody}
                    </Table>
                </Fragment>
            );
        } else {
            return (
                <div>loading</div>
            )
        }
    }
}
