import React, { Component } from 'react'
import axios from 'axios'

import Main from "../template/Main"


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}


export default class UserCrud extends Component {


    render () {
        return (
            <div>
                <Main {...headerProps}>
                    Escolha ao lado qual ação deseja realizar
                </Main>
            </div>
        )
    }
}