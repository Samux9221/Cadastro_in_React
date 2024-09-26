// ListarButton.js
import React, { Component } from 'react'

import Main from "../template/Main"
import './Acoes_users.css';

const headerProps = {
    icon: '*',
    title: 'Página não esxistente',
    subtitle: ''
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