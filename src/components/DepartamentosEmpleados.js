import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DepartamentosEmpleados extends Component {
    selectDepartamento = React.createRef();

    state = {
        empleados: [],
        departamentos: [],
    }

    buscarEmpleados = (e) => {
        e.preventDefault();

        let idDepartamento = this.selectDepartamento.current.value;
        let request = 'api/empleados/empleadosdepartamento/' + idDepartamento;
        let url = Global.urlApiEmpleados + request;

        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
            })
        })
    }

    loadDepartamentos = () => {
        let request = 'api/departamentos';
        let url = Global.urlApiDepartamentos + request;

        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                departamentos: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>DepartamentosEmpleados</h1>
                <form>
                    <label>Seleccione un departamento</label>
                    <select ref={this.selectDepartamento}>
                        {
                            this.state.departamentos.map((departamento, index) => {
                                return (<option key={index} value={departamento.Numero}>{departamento.Nombre}</option>)
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
