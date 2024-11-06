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
        users: [] // Estado para armazenar os usuários
    };

    // Método chamado após o componente ser montado
    componentDidMount() {
        // Faz uma requisição GET para buscar a lista de usuários
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data }); // Atualiza o estado com os usuários
            })
            .catch(error => console.error('Erro ao buscar usuários:', error)); // Trata erros
    }

    // Método para lidar com a edição de um usuário
    handleEdit(user) {
        // Redireciona para a página de edição do usuário, passando o ID como parâmetro na URL
        this.props.history.push(`/users/alterar/${user.id}`);
    }

    // Método para lidar com a exclusão de um usuário
    handleDelete(user) {
        console.log("Excluir usuário:", user);
        // Aqui você poderia implementar a lógica para excluir o usuário
    }

    // Renderiza a lista de usuários
    renderUsers() {
        return this.state.users.map(user => (
            <aside key={user.id}>
                <li className="user-list-item">
                    <span className="user-info">{user.name} - {user.email}</span>
                    <div className="user-actions">
                        <button onClick={() => this.handleEdit(user)}>
                            <i className="fas fa-edit"></i>
                        </button>
                        <button onClick={() => this.handleDelete(user)} className="delete-btn">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </li>
            </aside>
        ));
    }

    // Renderiza o botão para adicionar um novo usuário
    buttomAdd() {
        return (
            <div className="add-button-container">
                <Link className="add-button" to='/users/incluir'>
                    <i className='fas fa-plus'></i> Adicionar Usuário
                </Link>
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
