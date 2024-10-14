import React, { Component } from 'react';
import axios from 'axios';
import Main from "../template/Main";
import './Acoes_users.css';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

export default class UserCrud extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data });
            });
    }

    renderUsers() {
        return this.state.users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
        ));
    }

    render() {
        return (
            <div>
                <Main {...headerProps}>
                    <ul className="user-list">
                        {this.renderUsers()}
                    </ul>
                </Main>
            </div>
        );
    }
}
