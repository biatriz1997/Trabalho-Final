import React, { Component } from 'react';
import V from './img/video.mp4';
import './Video.css';

class Video extends Component {

	 render() { 
  
      return (
        <body> 
         <div>
         
              <video autoPlay loop className="video1">
               
                 
                 <source src= {V} type="video/mp4"/>

              </video>

         </div>
         </body>

      	);


   }


}



export default Video;

