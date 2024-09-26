// ListarButton.js
import React, { Component } from 'react'

import Main from "../template/Main"
import './Acoes_users.css';

const headerProps = {
    icon: 'users/listar',
    title: 'Listar usuários',
    subtitle: 'Consulte todos os usuários cadastrados'
}

export default class Listar extends Component {
    render () {
        return (
            <div>
                <Main {...headerProps}>
                    Segue abaixo a lista de todos os nossos usuários atuais: 
                </Main>
            </div>
        )
    }
}