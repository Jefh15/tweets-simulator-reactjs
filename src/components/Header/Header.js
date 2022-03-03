import React from 'react';
// importo el archivo de estilos
import "./Header.scss";
// importo el logo de tweeterLogo
import logo from "../../assets/img/twitter-logo.png";



export default function Header() {
  return (
    <div className="header">
        <img src={logo} alt="Tweets Simulator" />
        <h1>Tweets Simulator</h1>

    </div>
  )
}
