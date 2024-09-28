    import React, { useState } from 'react';

    export default function Menu(props) {
        const [controlarVisibilidade, setcontrolarVisibilidade] = useState(false);
    
        const alterarEstado = () => {
            setcontrolarVisibilidade(!controlarVisibilidade);
        };
    
        return (
            <aside>
                <a href="#/">
                    <i className="fa fa-home"></i> Início
                </a>
                <li style={{ color: 'white', textDecoration: 'none', listStyleType: 'none' }}>
                    <a href="#/" onClick={alterarEstado} style={{ cursor: 'pointer' }}>
                        <i className="fa fa-users"></i> Usuários
                    </a>
                    {controlarVisibilidade && (
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
    