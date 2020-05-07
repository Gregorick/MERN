import React, { Component, Fragment } from 'react'
import RegistPNG from '../img/registration_bg.svg'
import axios from 'axios'

export default class CreacteCliente extends Component {

    state = {
        clientes: [],
        ncliente: '',
        cpuser: '',
        cppw: '',
        bbdname: '',
        bbduser: '',
        bbdpwd: '',
        wpuser: '',
        wppw: '',
        _id: '',
        editing: false
        
    }

    async componentDidMount() {
       if ( this.props.match.params.id) {
        const botonTexto = document.querySelector('.boton-enviar');   
        botonTexto.textContent = 'Editar';
        const res = await axios.get(`http://localhost:4000/api/clientes/${this.props.match.params.id}`)
        this.setState({
            ncliente: res.data.ncliente,
            cpuser: res.data.cpuser,
            cpwp: res.data.cpwp,
            bbdname: res.data.bbdname,
            bbduser: res.data.bbduser,
            bbdpwd: res.data.bbdpwd,
            wpuser: res.data.wpuser,
            wppw: res.data.wppw,
            _id: this.props.match.params.id,
            editing: true
        })
       }
    }


    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createCliente = async (e) => {
         e.preventDefault()
         const clientes = {
            ncliente: this.state.ncliente,
            cpuser: this.state.wpuser,
            cpwp: this.state.cpwp,
            bbdname: this.state.bbdname,
            bbduser: this.state.bbduser,
            bbdpwd: this.state.bbdpwd,
            wpuser: this.state.wpuser,
            wppw: this.state.wppw
         }
         
         if ( this.state.editing ) {
            await axios.put(`http://localhost:4000/api/clientes/${this.state._id}`, clientes)

         } else {
            await axios.post('http://localhost:4000/api/clientes', clientes)
         }

         window.location.href = '/clientes'
    }

    render() {
        return (
          <React.Fragment>
              <div className="agregar-clientes">
                  <div className="flexbox">
                      <div className="foto">
                          <img src={RegistPNG} alt=""/>
                      </div>
                      <div className="formulario">
                          <form onSubmit={this.createCliente}>
                              <div className="flexbox">
                                  <div className="nombredelcliente">
                                      <h4>Nombre del cliente:</h4>
                                  </div>
                                  <input value={this.state.ncliente} onChange={this.handleChange} type="text" name='ncliente'/>
                              </div>
                              <div className="flexbox">
                                  <input value={this.state.cpuser} onChange={this.handleChange} type="text" name='cpuser' placeholder="Nombre Usuario Cpanel"/>
                                  <input value={this.state.cpwp} onChange={this.handleChange} type="text" name='cpwp' placeholder="Contraseña Cpanel"/>
                              </div>
                              <div className="flexbox">
                                  <input value={this.state.bbdname} onChange={this.handleChange} type="text" name='bbdname' placeholder="Nombre BD"/>
                                  <input value={this.state.bbduser} onChange={this.handleChange} type="text" name='bbduser' placeholder="Usuario BD"/>
                                  <input value={this.state.bbdpwd} onChange={this.handleChange} type="text" name='bbdpwd' placeholder='contraseña BD'/>
                              </div>
                              <div className="flexbox">
                                  <input value={this.state.wpuser} onChange={this.handleChange} type="text" name='wpuser' placeholder="Usuario de WP"/>
                                  <input value={this.state.wppw} onChange={this.handleChange} type="text" name='wppw' placeholder="Contraseña de WP"/>                                  
                              </div>
                              <div className="boton">
                                  <button type="submit" className="boton-enviar">Agregar</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
               </React.Fragment>
        )
    }
}
