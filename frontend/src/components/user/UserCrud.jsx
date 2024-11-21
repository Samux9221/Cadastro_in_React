import React, { Component } from 'react';
import axios from 'axios';
import Main from "../template/Main";
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import './Acoes_users.css';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

Modal.setAppElement('#root'); // Configuração de acessibilidade

export default class UserCrud extends Component {
    state = {
        users: [],
        isEditModalOpen: false,
        isDeleteModalOpen: false,
        selectedUser: null
    };

    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data });
            });
    }

    // Funções para abrir e fechar modais
    openEditModal = (user) => this.setState({ isEditModalOpen: true, selectedUser: user });
    closeEditModal = () => this.setState({ isEditModalOpen: false, selectedUser: null });

    openDeleteModal = (user) => this.setState({ isDeleteModalOpen: true, selectedUser: user });
    closeDeleteModal = () => this.setState({ isDeleteModalOpen: false, selectedUser: null });

    renderUsers() {
        return this.state.users.map(user => (
            <aside key={user.id}>
                <li className="user-list-item">
                    <span className="user-info">{user.name} - {user.email}</span>
                    <div className="user-actions">
                        <Link to="#" onClick={() => this.openEditModal(user)}>
                            <i className="fas fa-edit"></i>
                        </Link>
                        <Link to="#" onClick={() => this.openDeleteModal(user)} className="delete-btn">
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

                {/* Modal de Edição */}
                <Modal
                    isOpen={this.state.isEditModalOpen}
                    onRequestClose={this.closeEditModal}
                    overlayClassName="ReactModal__Overlay"
                    className="ReactModal__Content"
                >
                    <h2>Editar Usuário</h2>
                    <form>
                        <label>Nome:</label>
                        <input type="text" placeholder="Nome" defaultValue={this.state.selectedUser?.name} />

                        <label>Email:</label>
                        <input type="email" placeholder="Email" defaultValue={this.state.selectedUser?.email} />

                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <button type="button" onClick={this.closeEditModal} className='add-save-cancel'>Cancelar</button>
                            <button type="submit" style={{ marginLeft: '10px' }} className='add-save-cancel'>Salvar</button>
                        </div>
                    </form>
                </Modal>

                {/* Modal de Exclusão */}
                <Modal
                    isOpen={this.state.isDeleteModalOpen}
                    onRequestClose={this.closeDeleteModal}
                    overlayClassName="ReactModal__Overlay"
                    className="ReactModal__Content"
                >
                    <h2>Excluir Usuário</h2>
                    <p>Tem certeza de que deseja excluir o usuário <strong>{this.state.selectedUser?.name}</strong>?</p>
                    <div style={{ textAlign: 'right' }}>
                        <button onClick={this.closeDeleteModal} className='add-save-cancel'>Cancelar</button>
                        <button onClick={() => {
                            // Função de exclusão
                            console.log("Excluindo usuário:", this.state.selectedUser);
                            this.closeDeleteModal();
                        }} className='add-save-cancel' style={{ marginLeft: '10px' }}>Excluir</button>
                    </div>
                </Modal>
            </div>
        );
    }
}
