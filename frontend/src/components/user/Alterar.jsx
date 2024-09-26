import React, { Component } from 'react';
import Main from "../template/Main";
import './Acoes_users.css';

const headerProps = {
    icon: 'users/alterar',
    title: 'Alterar usuário',
    subtitle: 'Modifique alguma informação de um usuário'
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
