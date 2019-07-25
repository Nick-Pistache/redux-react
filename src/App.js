import React,{Component} from 'react';
import './App.css';
import LightContainer from './LightContainer';
import NavBarContainer from './NavBarContainer';


export class App extends Component {  
  render() {     
    return (      
      <div className="App">
        <NavBarContainer/>
        <LightContainer/>        
      </div>
    );
  }  
}
export default App;