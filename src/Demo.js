import React, {Component} from 'react';
import Header from './components/header.js'
import Dial from './components/dial_pad.js'
class Demo extends Component{
  render(){
    return(
        <div>
          <Header/>
          <Dial/>
        </div>  
      );
  }
}


export default Demo;
