import React, {Component} from 'react'
import './App.css';
import Navbar from '../components/Navbar.js'
import Splash from '../components/Splash.js'
import Footer from '../components/Footer.js'
import About from '../components/About.js'
import Pricing from '../components/Pricing.js'
import Portfolio from '../components/Portfolio.js'

class  App extends Component {

  componentDidMount() {
  }

  render (){
    return (
      <div>
          <Navbar></Navbar>
          <Splash></Splash>
          <About></About>
          <Portfolio></Portfolio>
          <Pricing></Pricing>
          <Footer></Footer>
      </div>
    )
    } 
}

export default App;
