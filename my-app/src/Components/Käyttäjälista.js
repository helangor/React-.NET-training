import React from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

class Käyttäjälista extends React.Component {

    constructor(props) {
        super(props);
        this.state = { käyttäjät: [] };
    }

    fetchCustomers(CompanyId) {
        const ApiCall = "https://localhost:44369/api/customers/" + CompanyId;
        fetch(ApiCall)
            .then(response => response.json())
            .then(käyttäjät => {
                this.setState({ käyttäjät: käyttäjät });
            });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.fetchCustomers(document.getElementById('CompanyId').value)
        }
    }

    render() {

        try {
            return (
                <div className="App">
                    <h1>Northwind Customers</h1>
                    <h2>Fetch a list from an API and display it</h2>
                    <input type="text" className="fetch-input" placeholder="Insert CompanyId" id="CompanyId" onKeyPress={this.handleKeyPress} />
                    <button className="fetch-button" onClick={() => this.fetchCustomers(document.getElementById('CompanyId').value)}>Fetch Data</button>
                    <Grid container direction="row" justify="center" alignItems="center" >
                        {this.state.käyttäjät && this.state.käyttäjät.map((customer, index) => {
                            return (
                                <Grid item xs={12} sm={6}>
                                    <Card key={index} variant="outlined" className="customer" style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
                                        <h2>{customer.companyName} ({customer.customerId})</h2>
                                        <p>👨 {customer.contactTitle}: {customer.contactName}</p>
                                        <p>📍 {customer.address}, {customer.postalCode}</p>
                                        <div class="wraptocenter">
                                            <p><img src={`https://cdn.countryflags.com/thumbs/${customer.country.toLowerCase()}/flag-square-250.png`}></img> {customer.city}, {customer.country}</p>
                                        </div>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            );
        } catch (e) {
            return (
                <div className="App">
                    <h1>Northwind Customers</h1>
                    <h2>Fetch a list from an API and display it</h2>
                    <input type="text" className="fetch-input" placeholder="Insert CompanyId" id="CompanyId" onKeyPress={this.handleKeyPress} />
                    <button className="fetch-button" onClick={() => this.fetchCustomers(document.getElementById('CompanyId').value)}>Fetch Data</button>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Card variant="outlined" className="customer" style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
                                <h2>No results</h2>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            )
        }
    }
}

export default Käyttäjälista;