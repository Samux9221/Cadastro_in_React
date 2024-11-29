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
    mostrarModalEdit = (user) => {

        this.setState({ selectedUser: user }); // passamos como argumento um objeto e o react agora sabe quem é o usuário selecionado

        Alerta.fire({
            title: 'Editar Usuário',
            html: `
                <input id="name" class="swal2-input" placeholder="Nome" value="${user.name}" />
                <input id="email" class="swal2-input" placeholder="Email" value="${user.email}"/>
            `,
            icon: 'info',
            confirmButtonText: 'Confirmar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then(result => {

            if(result.isConfirmed){
                const nowName = document.getElementById('name').value; // pega os dados preenchidos no campo do HTML pelo seu id (name or email)
                const nowEmail = document.getElementById('email').value;

                this.editarUsuario(user.id, { name: nowName, email: nowEmail });
            }

        });
    };

    editarUsuario = (id, usuarioAtualizado) => {

        axios.put(`http://localhost:3000/users/${id}`, usuarioAtualizado)
            .then(response => {

                const usuariosAtualizados = this.state.users.map( user => 
                    user.id === id ? response.data : user   
                );

                this.setState({ users: usuariosAtualizados });
                Alerta.fire('Sucesso', 'Usuário atualizado com sucesso!', 'success');
            })
            .catch(error => {
                Alerta.fire('Erro', 'Ocorreu um erro ao atualizar o usuário.', 'error');
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
                        <Link to="#" onClick={() => this.mostrarModalEdit(user)}>
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
