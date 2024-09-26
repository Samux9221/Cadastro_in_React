import './Header.css'
import React from 'react'

import Alterar from '../user/Alterar'
import Excluir from '../user/Excluir'
import Incluir from '../user/Incluir'
import Listar from '../user/Listar'

export default props => 
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>