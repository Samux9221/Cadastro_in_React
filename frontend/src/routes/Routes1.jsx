import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Alterar from '../components/user/Alterar'
import Excluir from '../components/user/Excluir'
import Incluir from '../components/user/Incluir'
import Listar from '../components/user/Listar'
import Errado from '../components/user/Errado'

export default props =>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Cadastro_in_React" element={<Home />}/>
            <Route path="/users" element={<UserCrud />}/>
            <Route path="/users/alterar" element={<Alterar />}/>
            <Route path="/users/excluir" element={<Excluir />}/>
            <Route path="/users/incluir" element={<Incluir />}/>
            <Route path="/users/listar" element={<Listar />}/>
            <Route path="*" element={<Errado />}/>
        </Routes>