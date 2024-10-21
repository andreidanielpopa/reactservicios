import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>Home |</NavLink>
                <NavLink to='/tabla/23'>Tabla de Multiplicar |</NavLink>
                <NavLink to='/tabla/6'>Tabla de Multiplicar |</NavLink>
                <NavLink to='/tabla/7'>Tabla de Multiplicar |</NavLink>
                <NavLink to='/noesxistenideblas'>Not Found |</NavLink>
            </div>
        )
    }
}
