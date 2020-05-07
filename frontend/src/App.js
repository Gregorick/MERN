import React from 'react'; 
import Header from './component/Header'
import ClientList from './component/ClienteList'
import CreateCliente from './component/CreacteCliente'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <Header /> 
      <div className="contenedor bg-center">
         <Route exact path='/' component={ClientList} />
         <Route exact path='/Clientes' component={ClientList} />
         <Route path='/create' component={CreateCliente} />
         <Route path='/edit/:id' component={CreateCliente} /> 
      </div>      
      </BrowserRouter>
    );
  }
}

export default App;
