import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/tabla/23'>Tabla de Multiplicar</a></li>
                    <li><a href='/tabla/6'>Tabla de Multiplicar</a></li>
                    <li><a href='/tabla/7'>Tabla de Multiplicar</a></li>
                    <li><a href='/noesxistenideblas'>Not Found</a></li>
                </ul>
            </div>
        )
    }
}
