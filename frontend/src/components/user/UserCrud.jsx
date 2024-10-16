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

    /*montandoLista(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }
*/
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

    buttomAdd(){
        return <div className="add-button-container">
                <Link className="add-button" to='/users/incluir'>
                    <i className='fas fa-plus'></i> Adicionar Usuário
                </Link>
            </div>
    
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete()
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