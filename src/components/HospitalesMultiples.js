import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import axios from 'axios'
import Global from '../Global'

export default class HospitalesMultiples extends Component {
    selectHospital = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
    }

    loadHospitales = () => {
        let request = 'api/Hospitales';
        let url = Global.urlApiEjemplos + request;

        axios.get(url).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    getHospitalesSeleccionados = (e) => {
        e.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;

        for (var opt of options) {
            if (opt.selected == true) {
                aux.push(opt.value);
            }
        }
        this.setState({
            hospitalesSeleccionados: aux,
        })
    }

    render() {
        return (
            <div>
                <h1>Hospitales Multiples</h1>
                <form>
                    <select ref={this.selectHospital} className='form-control' size='8' multiple>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (<option key={index} value={hospital.idHospital}>{hospital.nombre}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.getHospitalesSeleccionados} className='btn btn-info'>Mostar Trabajadores</button>
                </form>
                {
                    this.state.hospitalesSeleccionados.length != 0 &&
                    <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />
                }


            </div>
        )
    }
}
