import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';
import logo from  './img/logo.png';
import {Link} from 'react-router-dom';

class Navigation extends Component {
 render () {
     
  return (

    
   <nav> 
      
       <div className="logoBtn">
            <div className="logo">
            <Link to="/"> <img src={logo} className="logo"/></Link>
            </div>
       </div>

          <ul> 
      
             <li> <Link to="/"> Home </Link> </li>
             <li> <Link to="/sobre"> Sobre </Link> </li>
      
             <li> <Link to="/projetos"> Portofolio </Link> </li>
             <li> <Link to="/contacto"> Contacto </Link> </li>

        </ul>

     </nav>
     
     
  );
}
}

export default Navigation;