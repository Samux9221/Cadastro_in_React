// ListarButton.js
import React from "react"
import { Link } from "react-router-dom"
import './Options.css'

function ListarButton() {
  return (
    <Link to="/listar" className="listar-button">
      Listar
    </Link>
  );
}

export default ListarButton;
