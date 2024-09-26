// ExcluirButton.js
import React from "react"
import { Link } from "react-router-dom"
import './Options.css'

function ExcluirButton() {
  return (
    <Link to="/excluir" className="excluir-button">
      Excluir
    </Link>
  );
}

export default ExcluirButton;
