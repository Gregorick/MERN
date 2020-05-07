import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
          <header>
            <div className="flexbox">
            <div className="logo">
                <h3>Clientes</h3> 
            </div> 
                <div className="menuresponsive activo">
                  <button><i className="fas fa-bars"></i></button>
                </div>
                <nav className="nav justify-content-center">
                  <Link className="nav-link active" to={'/clientes'}>Clientes</Link>
                  <Link className="nav-link active" to={'/create'}>Crear un Cliente</Link>
                </nav>
            </div>
         </header>
        )
    }
}

export default Header;