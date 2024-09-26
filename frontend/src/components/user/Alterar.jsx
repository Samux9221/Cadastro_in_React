// AlterarButton.js
import React from "react"
import { Link } from "react-router-dom"
import './Options.css'

function AlterarButton() {
  return (
    <Link to="/alterar" className="alterar-button">
      Alterar
    </Link>
  );
}

export default AlterarButton;
