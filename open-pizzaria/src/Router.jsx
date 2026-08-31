import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre/Sobre'
import Cardapio from './Pages/Cardapio/Pizzas'
import Menu from './Components/Menu'
import Users from './Pages/Users'
import Comentario from './Pages/Comentario'
import NotFound from './Pages/NotFound'
import Cadastro from './Pages/Cadastro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Menu /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/pizzas" element={<Cardapio />} />
            <Route path="/users" element={<Users />} />
            <Route path="/comentario" element={<Comentario />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
