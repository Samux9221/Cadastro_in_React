    import React, { useState } from 'react';
    import { Link } from 'react-router-dom'

    export default function Menu(props) {
        const [controlarVisibilidade, setcontrolarVisibilidade] = useState(false);
    
        const alterarEstado = () => {
            setcontrolarVisibilidade(!controlarVisibilidade);
        };
    
        return (
            <aside>
                <Link to="/" onClick={() => controlarVisibilidade && alterarEstado()}>
                    <i className="fa fa-home"></i> Início   
                </Link>
                <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                    <Link to="/users" onClick={alterarEstado} style={{ cursor: 'pointer' }}>
                        <i className="fa fa-users"></i> Usuários
                    </Link>
                    {controlarVisibilidade && (
                        <ul>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <Link to="/users/incluir">
                                    <i className="fa fa-plus"></i> Incluir
                                </Link>
                            </li>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <Link to="/users/alterar">
                                    <i className="fa fa-plus"></i> Alterar
                                </Link>
                            </li>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <Link to="/users/excluir">
                                    <i className="fa fa-plus"></i> Excluir
                                </Link>
                            </li>
                            <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                                <Link to="/users/listar">
                                    <i className="fa fa-plus"></i> Listar
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </aside>
        );
    }
    