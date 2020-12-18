import React, {Component} from 'react'
import './App.css';
import Navbar from '../components/Navbar.js'
import Splash from '../components/Splash.js'
import Footer from '../components/Footer.js'

class  App extends Component {

  componentDidMount() {
  }

  render (){
    return (
      <div>
          <Navbar></Navbar>
          <Splash></Splash>
          <Footer></Footer>
      </div>
    )
    } 
}

export default App;
