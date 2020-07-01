import React, {Component} from 'react';
import './service.css';
import web from  './img/web.png';
import face from  './img/face.png';
import menu from  './img/menudigital.png';
import tweb from  './img/1.png';
import tface from  './img/2.png';
import tmenu from  './img/3.png';


class Service extends Component {

	 render () {
 
       return (
            <div className="services">

               <h3> Serviços </h3>
               <h2> O que posso fazer por si </h2>
               
               <div className="rows">

                <div className="flip">

                      <div className="fundo"> <span> <img src={tweb} className="imagem2"/> </span></div> 
                      <div className="frente"><span> <img src={web} className="imagem"/> </span> </div>



                </div> 

                <div className="flip">

                      <div className="fundo"> <span> <img src={tface} className="imagem2"/> </span> </div> 
                      <div className="frente"><span> <img src={face} className="imagem"/> </span> </div>




                </div> 
                <div className="flip">

                      <div className="fundo"> <span> <img src={tmenu} className="imagem2"/> </span> </div> 
                      <div className="frente"><span> <img src={menu} className="imagem"/> </span>  </div>



                </div> 
                  
              </div>
      
           </div> 
         


         


      




       	);
   }
           
}


export default Service;