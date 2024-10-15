import React, { Component } from 'react';
import axios from 'axios';
import Main from "../template/Main";
import { Link } from 'react-router-dom'; 
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

    handleEdit(user) {
        console.log("Editar usuário:", user);
    }

    handleDelete(user) {
        console.log("Excluir usuário:", user);
    }

    renderUsers() {
        return this.state.users.map(user => (
            <aside key={user.id}>  {/* Colocando a key corretamente no elemento pai */}
                <li className="user-list-item">
                    <span className="user-info">{user.name} - {user.email}</span>
                    <div className="user-actions">
                        <Link to="/users/alterar">
                            <i className="fas fa-edit"></i>
                        </Link>
                        <Link to="/users/excluir" className="delete-btn">
                            <i className="fas fa-trash-alt"></i>
                        </Link>
                    </div>
                </li>
            </aside>
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