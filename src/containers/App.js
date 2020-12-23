import React, {Component} from 'react'
import './App.css';
import Navbar from '../components/Navbar.js'
import Splash from '../components/Splash.js'
import Footer from '../components/Footer.js'
import About from '../components/About.js'
import Pricing from '../components/Pricing.js'
import PortfolioList from '../components/PortfolioList.js'
import { projects } from '../assets/projects.js'

class  App extends Component {

  componentDidMount() {
  }

  render (){
    return (
      <div>
          <Navbar></Navbar>
          <Splash></Splash>
          <About></About>
          <PortfolioList projects={ projects } ></PortfolioList>
          <Pricing></Pricing>
          <Footer></Footer>
      </div>
    )
    } 
}

export default App;
