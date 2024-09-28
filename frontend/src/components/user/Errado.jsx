import React, { Component } from 'react';
import Main from "../template/Main";
import './Acoes_users.css';

const headerProps = {
    icon: '*',
    title: 'Página não existente',
    subtitle: ''
}

export default class Alterar extends Component {
    render() {
        return (
            <div>
                <Main {...headerProps} className="acoes-header">
                    <div className="content-box">
                        <p>...</p>
                    </div>
                </Main>
            </div>
        );
    }
}