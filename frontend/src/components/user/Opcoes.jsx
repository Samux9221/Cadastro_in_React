import React from "react"
import Opcoes from './Opcoes.css'

export default props =>
    
    <div className="rectangle-container">

        <a href="#/incluir">
            <div className="rectangle">Incluir</div>
        </a>

        <a href="#/alterar">
            <div className="rectangle">Alterar</div>
        </a>

        <a href="#/excluir">
            <div className="rectangle">Excluir</div>
        </a>

        <a href="#/listar">
            <div className="rectangle">Listar</div>
        </a>
    </div>