// ListarButton.js
import React, { Component } from 'react'

import Main from "../template/Main"
import './Acoes_users.css';


const headerProps = {
    icon: 'users/incluir',
    title: 'Incluir usuário',
    subtitle: 'Adicione um usuário ao nosso sistema'
}

export default class Incluir extends Component {
    render () {
        return (
            <div>
                <Main {...headerProps}>
                    ...
                </Main>
            </div>
        )
    }
}