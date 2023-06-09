import React from "react";
import './Header.css'
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";


export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"/>
                </a>
            </div>
            <div className="shear">
            <FiSearch/>
            </div>
            <div className="notif">
            <IoNotificationsOutline/>
            </div>
            <div className="header-user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                </a>
            </div>
            <div className="functions">
                    <a href="/">Início</a>
                    <a href="/">Séries</a>
                    <a href="/">Filmes</a>
                    <a href="/">Bombando</a>
                    <a href="/">Minha lista</a>
                    <a href="/">Navegar por idiomas</a>          
                </div>
                <div className="nameaba">
                    <a href="/">Infantil</a>
                </div>
        </header>
        
    );
} 