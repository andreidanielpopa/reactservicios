import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: [],
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let num = parseInt(this.props.numero);

        for (var i = 1; i <= 10; i++) {
            var operacion = num * i;
            aux.push(operacion);
        }

        this.setState({
            tabla: aux,
        })
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero != this.props.numero) {
            this.generarTablaMultiplicar();
        }
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }

    render() {
        return (
            <div>
                <h2>Tabla Multiplicar Rutas</h2>
                <h3>Numero: {this.props.numero}</h3>
                <ul>
                    {
                        this.state.tabla.map((numero, index) => {
                            return (
                                <li key={index}>{this.props.numero} * {index + 1} = {numero}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
