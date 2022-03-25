import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
return(
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
                </li>
            </ul>
        </div>
    </nav>
);
}

export default Menu;