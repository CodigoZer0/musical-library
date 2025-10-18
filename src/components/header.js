import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../styles/app.css';
class Header extends Component{
    render(){
        return(
            <header className="header">
                <h1 className="header_title">Biblioteca Musical</h1>
                <img className="header_img" src={logo} alt="Logo de la Biblioteca Musical" />
            </header>
        )
    }
}

export default Header;