import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ServicioCustomers extends Component {

    urlCustomers = Global.urlApiCustomers;

    state = {
        customers: [],
    }

    loadCustomers = () => {
        console.log('Antes del servicio');
        let request = 'customers.json';
        axios.get(this.urlCustomers + request).then(response => {
            console.log('Leyendo servico');
            this.setState({
                customers: response.data.results,
            })
        })
        console.log('Despues del servicio')
    }

    componentDidMount = () => {
        console.log('Creando componente');
        this.loadCustomers();
    }

    render() {
        return (
            <div>
                <h1>Servicio Api Customers</h1>
                {
                    this.state.customers.map((cliente, index) => {
                        return (
                            <h3 key={index}>{cliente.contactName}</h3>
                        )
                    })
                }
            </div>
        )
    }
}
