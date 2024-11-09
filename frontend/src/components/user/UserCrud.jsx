/*
import React, { Component } from 'react';
import axios from 'axios';
import Main from "../template/Main";
import './Acoes_users.css';
import Modal from "react-modal";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
};

Modal.setAppElement('#root'); // Configuração de acessibilidade

export default class UserCrud extends Component {
    state = {
        users: [],
        isModalOpen: false, // Estado para controlar o modal
        modalType: '', // Tipo de modal ('editar' ou 'excluir')
        selectedUser: null // Usuário selecionado para edição ou exclusão
    };

    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data });
            });
    }

    openModal = (type, user) => {
        this.setState({ isModalOpen: true, modalType: type, selectedUser: user });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false, modalType: '', selectedUser: null });
    }

    handleEdit = () => {
        console.log("Editar usuário:", this.state.selectedUser);
        this.closeModal();
    }

    handleDelete = () => {
        console.log("Excluir usuário:", this.state.selectedUser);
        this.closeModal();
    }

    renderUsers() {
        return this.state.users.map(user => (
            <aside key={user.id}>
                <li className="user-list-item">
                    <span className="user-info">{user.name} - {user.email}</span>
                    <div className="user-actions">
                        <button onClick={() => this.openModal('editar', user)}>
                            <i className="fas fa-edit"></i>
                        </button>
                        
                        <button className="delete-btn" onClick={() => this.openModal('excluir', user)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>

                        <Modal
                            isOpen={this.state.isModalOpen}
                            onRequestClose={this.closeModal}
                            className="ReactModal__Content"
                            overlayClassName="ReactModal__Overlay"
                        >
                            {this.state.modalType === 'editar' ? (
                                <div>
                                    <h2>Editar Usuário</h2>
                                    <form onSubmit={this.handleEdit}>
                                        <label>Nome:</label>
                                        <input type="text" defaultValue={this.state.selectedUser?.name} placeholder="Nome" />

                                        <label>Email:</label>
                                        <input type="email" defaultValue={this.state.selectedUser?.email} placeholder="Email" />

                                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                                            <button type="button" onClick={this.closeModal}>Cancelar</button>
                                            <button type="submit" style={{ marginLeft: '10px' }}>Salvar</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    <h2>Confirmar Exclusão</h2>
                                    <p>Tem certeza que deseja excluir {this.state.selectedUser?.name}?</p>
                                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                                        <button type="button" onClick={this.closeModal}>Cancelar</button>
                                        <button type="button" onClick={this.handleDelete} style={{ marginLeft: '10px' }}>Excluir</button>
                                    </div>
                                </div>
                            )}
                        </Modal>
                    </div>
                </li>
            </aside>
        ));
    }

    buttomAdd() {
        return (
            <div className="add-button-container">
                <button className="add-button" onClick={() => this.openModal('incluir')}>
                    <i className='fas fa-plus'></i> Adicionar Usuário
                </button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Main {...headerProps}>
                    <ul>
                        {this.buttomAdd()}
                    </ul>
                    <ul className="user-list">
                        {this.renderUsers()}
                    </ul>
                </Main>
            </div>
        );
    }
}
*/

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
                            <button type="button" onClick={this.closeEditModal}>Cancelar</button>
                            <button type="submit" style={{ marginLeft: '10px' }}>Salvar</button>
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
                        <button onClick={this.closeDeleteModal}>Cancelar</button>
                        <button onClick={() => {
                            // Função de exclusão
                            console.log("Excluindo usuário:", this.state.selectedUser);
                            this.closeDeleteModal();
                        }} style={{ marginLeft: '10px' }}>Excluir</button>
                    </div>
                </Modal>
            </div>
        );
    }
}
