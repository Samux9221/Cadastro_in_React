import React, { Component } from 'react'

import Main from "../template/Main"
import Opcoes from './Options'


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
                    Qual ação deseja executar?
                </Main>
                <Opcoes />
            </div>
        )
    }
}