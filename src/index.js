import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Service from './Service';
import Home from './Home';
import Sobre from './Sobre';
import Contacto from './Contacto';
import Projetos from './Projetos';
//import registerServiceWorker from './registerServiceWorker';
class App extends Component {

	render() { 
  
     return (

       <Router>

           <div>
            <Navigation/>
      	    
      	    <Switch> 
      	       <Route exact path="/" component={Home}/>
      	       <Route exact path="/sobre" component={Sobre}/>
      	       <Route exact path="/contacto" component={Contacto}/>
      	       <Route exact path="/projetos" component={Projetos}/>

               

      	     </Switch>
      
           </div>

       </Router>
       

      	);


   }


}

ReactDOM.render(<App/>, document.getElementById('root'));

//registerServiceWorker();
