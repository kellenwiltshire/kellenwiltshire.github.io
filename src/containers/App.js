import React, {Component} from 'react'
import './App.css';
import Navbar from '../components/Navbar.js'
import Splash from '../components/Splash'

class  App extends Component {

  componentDidMount() {
  }

  render (){
    return (
      <div>
          <Navbar></Navbar>
          <Splash></Splash>
      </div>
    )
    } 
}

export default App;
