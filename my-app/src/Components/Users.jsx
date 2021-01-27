import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Users() {
    const [customers, setCustomers] = useState(null);

    const fetchCustomers = async () => {
        const response = await axios.get(
            'https://localhost:44369/api/customers'
        );
        setCustomers(response.data);
    };

    return (
        <div className="App">
            <h1>Northwind Customers</h1>
            <h2>Fetch a list from an API and display it</h2>
            <input type="text"className="fetch-input" placeholder="CompanyId"/>
            <button className="fetch-button" onClick={fetchCustomers}>Fetch Data</button>
            <div className="customers">
                {customers &&
                    customers.map((customer, index) => {
                        return (
                            <div className="customer" key={index}>
                                <h2>{customer.companyName} ({customer.customerId})</h2>
                                <div className="details">
                                    <p>👨 {customer.contactTitle}: {customer.contactName}</p>
                                    <p>{customer.address}, {customer.postalCode}</p>
                                    <p>{customer.city}, {customer.country}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Users;
