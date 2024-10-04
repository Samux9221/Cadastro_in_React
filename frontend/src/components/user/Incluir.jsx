import React, { useState } from 'react';
import axios from 'axios';
import Main from "../template/Main";
import './Acoes_users.css';

const headerProps = {
    icon: 'users/incluir',
    title: 'Incluir usuário',
    subtitle: 'Adicione um usuário ao nosso sistema'
};

const baseUrl = 'http://localhost:3000/users';

const initialState = {
    user: { name: '', email: '' },
    list: []
};

const Incluir = () => {
    const [user, setUser] = useState(initialState.user);
    const [list, setList] = useState(initialState.list);
    const [mensagem, setMensagem] = useState("");

    const clear = () => {
        setUser(initialState.user);
    };

    const save = () => {
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        axios[method](url, user)
            .then(resp => {
                const updatedList = getUpdatedList(resp.data);
                setUser(initialState.user);
                setList(updatedList);
            });
    };

    const getUpdatedList = (user) => {
        const updatedList = list.filter(usuario => usuario.id !== user.id);
        updatedList.unshift(user);
        return updatedList;
    };

    const atualizarCampo = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const validacao = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = e.target.value;

        if (emailRegex.test(email)) {
            setMensagem("Email válido");
        } else {
            setMensagem("Email não é válido");
        }
    };

    const renderForm = () => (
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={user.name}
                            onChange={atualizarCampo}
                            placeholder="Digite o nome..."
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={(e) => {
                                atualizarCampo(e);
                                validacao(e);
                            }}
                            placeholder="Digite o e-mail..."
                        />
                    </div>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button
                        className="btn btn-primary"
                        onClick={save}
                    >
                        Salvar
                    </button>

                    <button
                        className="btn btn-secondary ml-2"
                        onClick={clear}
                    >
                        Cancelar
                    </button>
                    <p className='menssagem'>{mensagem}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Main {...headerProps}>
                {renderForm()}
            </Main>
        </div>
    );
};

export default Incluir;
