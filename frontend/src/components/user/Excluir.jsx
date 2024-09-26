// ListarButton.js
import React, { Component } from 'react'

import Main from "../template/Main"
import './Acoes_users.css';

const headerProps = {
    icon: 'users/excluir',
    title: 'Excluir usuário',
    subtitle: 'Retire do nosso sistema um usuário já cadastrado'
}

export default class Excluir extends Component {
    render () {
        return (
            <div>
                <Main {...headerProps} >
                    ...
                </Main>
            </div>
        )
    }
}