import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ClienteList extends Component {

    state = {
        clientes: []
    }

    componentDidMount() {
        this.mostratClientes()
    }

      mostratClientes = async () => {
       const res = await axios.get('http://localhost:4000/api/clientes')
       this.setState({ clientes: res.data })
    }

    deleteCliente = async id => {
      if (window.confirm('Deseas Eliminar este Cliente?')) {
        await axios.delete(`http://localhost:4000/api/clientes/${id}`)
        this.mostratClientes()
      }
    }

    render() {
        return (
            <div className="listaclientes">
               {
                   this.state.clientes.map( cliente => (
                    <ul key={cliente._id}>
                    <button onClick={() => this.deleteCliente(cliente._id)} className="delete"><i className="fas fa-times-circle"></i></button>
                    <button className="edit"><Link to={`/edit/${cliente._id}`}><i className="fas fa-edit"></i></Link></button>
                    <li><span className="titulo">Nombre:</span><span className="desc">{cliente.ncliente}</span></li>
                    <li><span className="titulo">Usuario Cpanel: </span><span className="desc">{cliente.cpuser}</span></li>
                    <li><span className="titulo">Contraseña Cpanel</span><span className="desc">{cliente.cpwp}</span></li>
                    <li><span className="titulo">Nombre BBD</span><span className="desc">{cliente.bbdname}</span></li>
                    <li><span className="titulo">Usuario BBD</span><span className="desc">{cliente.bbduser}</span></li>
                    <li><span className="titulo">Contraseña BBD</span><span className="desc">{cliente.bbdpwd}</span></li>
                    <li><span className="titulo">usuario WP</span><span className="desc">{cliente.wpuser}</span></li>
                    <li><span className="titulo">Contraseña WP</span><span className="desc">{cliente.wppw}</span></li>
                </ul>
                   ))
               }
            </div>
        )
    }
}
