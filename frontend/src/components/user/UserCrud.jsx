import React, { Component } from 'react';
import axios from 'axios';
import Main from "../template/Main";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './Acoes_users.css';

const Alerta = withReactContent(Swal);

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

    // Função de exibição do modal para edição
    mostrarModalEdit = () => {
        Alerta.fire({
            title: 'Editar Usuário',
            html: 'Aqui você pode editar o usuário.',
            icon: 'info',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
        });
    };

    // Função de exibição do modal para exclusão
    mostrarModalExcluir = () => {
        Alerta.fire({
            title: 'Excluir Usuário',
            html: 'Aqui você vai excluir um usuário.',
            icon: 'warning',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
        });
    };

    renderUsers() {
        return this.state.users.map(user => (
            <aside key={user.id}>
                <li className="user-list-item">
                    <span className="user-info">{user.name} - {user.email}</span>
                    <div className="user-actions">
                        <Link to="#" onClick={this.mostrarModalEdit}>
                            <i className="fas fa-edit"></i>
                        </Link>
                        <Link to="#" onClick={this.mostrarModalExcluir} className="delete-btn">
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
                    <div className="add-button-container">
                        <Link to="/users/incluir" className="add-button">
                            <i className='fas fa-plus'></i> Adicionar Usuário
                        </Link>
                    </div>
                    <ul className="user-list">
                        {this.renderUsers()}
                    </ul>
                </Main>
            </div>
        );
    }
}
