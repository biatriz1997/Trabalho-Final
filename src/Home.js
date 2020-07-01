import React, { Component } from 'react';
import Service from './Service';
import Video from './Video';
import Projetos from './Projetos';
import Contacto from './Contacto';
import About from './About';
import Rodape from './Rodape';
class Home extends Component {

	 render() { 
  
      return (
      	<div>
      	<Video/>
         <About/>
      	<Service/>
      	<Projetos/>
      	<Contacto/>
         <Rodape/>
      	</div>

       
          

      	);


   }


}



export default Home;