import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Trabajadores extends Component {
    cajaIncremento = React.createRef();

    state = {
        trabajadores: [],
    }

    loadTrabajadores = () => {

        let idsHospitales = this.props.idhospitales;

        if (idsHospitales.length != 0) {
            let data = '';
            for (var id of idsHospitales) {

                data += 'idhospital=' + id + '&';
            }
            data = data.substring(0, data.length - 1)

            let request = 'api/Trabajadores/TrabajadoresHospitales?' + data;
            let url = Global.urlApiEjemplos + request;
            axios.get(url).then(response => {
                this.setState({
                    trabajadores: response.data,
                })
            })
        }
    }

    incrementarSalario = (e) => {
        e.preventDefault();

        let incremento = parseInt(this.cajaIncremento.current.value)
        let idsHospitales = this.props.idhospitales;

        if (idsHospitales.length != 0) {
            let data = '';
            for (var id of idsHospitales) {

                data += 'idhospital=' + id + '&';
            }
            data = data.substring(0, data.length - 1)

            let request = 'api/trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=' + incremento + '&' + data;
            let url = Global.urlApiEjemplos + request;
            axios.put(url).then(response => {
                this.loadTrabajadores();
            })
        }

    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales) {
            this.loadTrabajadores();
        }
    }

    render() {
        return (
            <div>
                <h2>Trabajadores</h2>
                <form>
                    <label>Incremento salarial: </label>
                    <input type='text' ref={this.cajaIncremento}></input>
                    <button onClick={this.incrementarSalario} className='btn btn-info'>Incrementar Salario</button>
                </form>
                <hr />
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{trabajador.apellido}</td>
                                        <td>{trabajador.salario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
