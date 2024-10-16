import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class BuscadorCustomers extends Component {
    urlApi = Global.urlApiCustomers;
    cajaId = React.createRef();

    state = {
        customer: null,
    }

    buscarCustomers = (e) => {
        e.preventDefault();
        let idCustomer = this.cajaId.current.value;
        let request = 'customers/' + idCustomer + '.json';

        axios.get(this.urlApi + request).then((response) => {
            
            this.setState({
                customer: response.data.customer,
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Buscador Customers</h1>
                <form>
                    <label>ID Customer:</label>
                    <input type='text' ref={this.cajaId} />
                    <button onClick={this.buscarCustomers}>Buscar Customer</button>
                </form>
                {
                    this.state.customer &&
                    (<ul>
                        <li>{this.state.customer.contactName}</li>
                        <li>Empresa: {this.state.customer.companyName}</li>
                        <li>Puesto: {this.state.customer.contactTitle}</li>
                    </ul>)
                }
            </div>
        )
    }
}
