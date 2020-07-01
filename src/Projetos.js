import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import a from  './img/a.jpg';
import b from  './img/b.png';
import c from  './img/c.png';
import d from  './img/d.png';
import e from  './img/e.png';
import f from  './img/f.png';
import j from  './img/j.png';
import h from  './img/h.png';
import './Projetos.css';

class Projetos extends Component {

	 render() { 
  
      return (
       
      <div className="fundo"> 
          <h3> Projetos Recentes</h3>
       	  <h2> Conheça um pouco do meu trabalho </h2>
           
         <div className="rows">
            <div>
               <span> <img src={a} className="a"/></span>
                <h2> Marlin CV </h2>
             
            </div>   
           <div>
               <span>  <img src={c} className="c"/> </span>
               <h2>    Atlantiles  </h2>
               
            </div>
            <div>
               <span>  <img src={d} className="d"/>  </span>
               <h2>   Cabo Verde Safari </h2>
               
            </div>

             <div>
               <span>   <img src={b} className="b"/>  </span>
               <h2>   Albinos dos Santos </h2>
               
            </div>

             
           </div>
           <div className="rows1">
            <div>
               <span>  <img src={e} className="e"/> </span>
                <h2> Pousada Green Place </h2>
             
            </div>   
           <div>
               <span>  <img src={f} className="f"/></span>
               <h2>    Hotel Blue Marlin</h2>
               
            </div>
            <div>
               <span><img src={j} className="j"/>  </span>
               <h2>   Sosir </h2>
               
            </div>

             <div>
               <span><img src={h} className="h"/></span>
               <h2>   FotoExpress </h2>
               
            </div>
            
             
           </div>
          
           </div>

        
      
         
      	);


   }


}



export default Projetos;