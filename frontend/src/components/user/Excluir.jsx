import React, { Component } from 'react';
import Main from "../template/Main";
import './Acoes_users.css';

const headerProps = {
    icon: 'users/excluir',
    title: 'Excluir usuário',
    subtitle: 'Retire do nosso sistema um usuário já cadastrado'
}

export default class Alterar extends Component {
    render() {
        return (
            <div>
                <Main {...headerProps} className="acoes-header">
                    <div className="content-box">
                        <p>Aqui você pode modificar as informações de um usuário existente.</p>
                    </div>
                </Main>
            </div>
        );
    }
}


