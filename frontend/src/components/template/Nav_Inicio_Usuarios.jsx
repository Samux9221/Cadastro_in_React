/*import React from 'react'

export default props =>
    <aside>
        <a href="#/">
            <i className="fa fa-home"></i> Início
        </a>
            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                <a href="#/users">
                    <i className="fa fa-users"></i> Usuários
                </a>
                <ul>
                    <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                        <a href="#/incluir">
                            <i className="fa fa-plus"></i> Incluir
                        </a>
                    </li>
                    <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                        <a href="#/alterar">
                            <i className="fa fa-plus"></i> Alterar
                        </a>
                    </li>
                    <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                        <a href="#/excluir">
                            <i className="fa fa-plus"></i> Excluir
                        </a>
                    </li>
                    <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                        <a href="#/listar">
                            <i className="fa fa-plus"></i> Listar
                        </a>
                    </li>
                </ul>
            </li>

    </aside>*/

    import React, { useState } from 'react';

    export default function Menu(props) {
        const [showUserOptions, setShowUserOptions] = useState(false);
    
        const toggleUserOptions = () => {
            setShowUserOptions(!showUserOptions);
        };
    
        return (
            <aside>
                <a href="#/">
                    <i className="fa fa-home"></i> Início
                </a>
                <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                    <a href="#/" onClick={toggleUserOptions} style={{ cursor: 'pointer' }}>
                        <i className="fa fa-users"></i> Usuários
                    </a>
                    {showUserOptions && (
                        <ul>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <a href="#/incluir">
                                    <i className="fa fa-plus"></i> Incluir
                                </a>
                            </li>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <a href="#/alterar">
                                    <i className="fa fa-plus"></i> Alterar
                                </a>
                            </li>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <a href="#/excluir">
                                    <i className="fa fa-plus"></i> Excluir
                                </a>
                            </li>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <a href="#/listar">
                                    <i className="fa fa-plus"></i> Listar
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
            </aside>
        );
    }
    