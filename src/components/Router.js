import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            var { minumero } = useParams();
            return (<TablaMultiplicar numero={minumero}/>)
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tabla/:minumero' element={<TablaMultiplicarElement />} />
                    {/* Se de poner la ultima etiquita y utilizando un asterisco */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
