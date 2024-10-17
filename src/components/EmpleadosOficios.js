import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    selectOficio = React.createRef();

    state = {
        empleados: [],
        oficios: [],
    }

    buscarEmpleados = (e) => {
        e.preventDefault();

        let oficio = this.selectOficio.current.value;
        let request = 'api/empleados/empleadosoficio/' + oficio;
        let url = Global.urlApiEmpleados + request;

        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
            })
        })
    }

    loadOficios = () => {
        let request = 'api/empleados';
        let url = Global.urlApiEmpleados + request;

        axios.get(url).then(response => {
            let oficiosUnicos = [...new Set(response.data.map(empleado => empleado.oficio))];
            this.setState({
                oficios: oficiosUnicos,
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
            <div>
                <h1>Empleados Oficios</h1>
                <form>
                    <label>Seleccione un Oficio</label>
                    <select ref={this.selectOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {
                                return (<option key={index} >{oficio}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
                </form>
                <ul>
                    {
                        this.state.empleados.map((empleado, index) => {
                            return (<li key={index}>{empleado.apellido} - {empleado.oficio}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
