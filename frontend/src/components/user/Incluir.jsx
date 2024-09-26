// IncluirButton.js
import React from "react"
import { Link } from "react-router-dom"
import './Options.css'

function IncluirButton() {
  return (
    <Link to="/incluir" className="incluir-button">
      Incluir
    </Link>
  );
}

export default IncluirButton;
