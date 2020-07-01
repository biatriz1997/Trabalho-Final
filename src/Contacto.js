import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import './Contacto.css';

class Contacto extends Component {
      

      constructor(){ 

                 super();
                 this.state = { nome:"",
                                email:"",
                                sms:"",



               };
                 this.onChange = ( evento) => { 

                    const state = Object.assign({}, this.state);
                    const campo = evento.target.name;
                    state[campo] = evento.target.value;
                    this.setState(state );


                  };
                }
                  
           

   render() {


    return (
               
               <body class="blue">
                  <section class="form-section">
                    
                    <h3> Fale Comigo</h3>
                   <h2> O que posso fazer por si </h2>

                     <div class="form-wrapper">
                        <form>

                        <div class="input-block">
                           <label for="formulario">Nome</label>
                           <input class="name" value ={this.state.nome} onChange={this.onChange}  type="text" id="nome" />
                      </div>
                       <div class="input-block">
                       <label for="formulario">Email</label>
                       <input type="email" id="email" onChange={this.onChange} />
                       </div>
                       <div class="input-block">
                       <textarea id="story" name="story"
                             rows="5" cols="33" placeholder="Escreva  a sua messagem" onChange={this.onChange}/>
          
                      </div>
          
          
                       <button type="submit" class="btn-login">Enviar</button>
                      </form>
                    </div>
                  </section>


  
  </body>

     
    );
  }

}



export default Contacto;