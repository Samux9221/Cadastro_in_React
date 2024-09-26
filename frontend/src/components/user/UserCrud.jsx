import React, { Component } from 'react'

import Main from "../template/Main"
import Alterar from './Alterar'
import Excluir from './Excluir'
import Incluir from './Incluir'
import Listar from './Listar'
import Opcoes from './Opcoes'


//criar os botões e importar aqui, colocando as tags embaixo da tag main que estásendo retornada ali em baixo

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
                    Cadastro de usuários
                </Main>
                <Opcoes />
            </div>
        )
    }
}