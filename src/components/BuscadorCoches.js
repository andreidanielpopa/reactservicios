import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class BuscadorCoches extends Component {
    urlApi = Global.urlApiCoches;
    cajaMarca = React.createRef();

    state = {
        coches: [],
        cochesFiltrados: [],
    }

    buscarCoches = (e) =>{
        e.preventDefault();
        let marcaCoche = this.cajaMarca.current.value;
        if (!marcaCoche){
            this.loadCoches();
        }else{
            this.setState({
                cochesFiltrados: this.state.coches.filter(coche => coche.marca.toLowerCase() === marcaCoche.toLowerCase()),
            })
        }
        

        
    }

    loadCoches = () => {
        console.log('Antes del servicio');
        let request = 'webresources/coches';
        axios.get(this.urlApi + request).then(response => {
            console.log('Leyendo servico');
            this.setState({
                coches: response.data,
                cochesFiltrados: response.data,
            })
        })
        console.log('Despues del servicio')
    }

    //metodo para llamar al cargar el componente
    componentDidMount = () => {
        console.log('Creando componente');
        this.loadCoches();
    }

    render() {
        return (
            <div>
                <h1>BuscadorCoches</h1>
                <form>
                    <label>Introduzca marca:</label>
                    <input type='text' ref={this.cajaMarca} />
                    <button onClick={this.buscarCoches}>Buscar coches</button>
                </form>
                <table border={1} className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Coche</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cochesFiltrados.map((coche,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{coche.marca} {coche.modelo}</td>
                                        <td>{coche.conductor}</td>
                                        <td><img src={coche.imagen} alt={coche.modelo} style={{width:200, height:150}}/></td>
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
