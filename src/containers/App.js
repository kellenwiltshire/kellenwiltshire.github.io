import React, {Component} from 'react'
import './App.css';
import Navbar from '../components/Navbar.js'
import Splash from '../components/Splash.js'
import Footer from '../components/Footer.js'
import About from '../components/About.js'
import PortfolioList from '../components/PortfolioList.js'
import Contact from '../components/Contact'
import { projects } from '../assets/projects.js'

class  App extends Component {

  componentDidMount() {
  }

  render (){
    return (
      <div className="flex flex-col">
          <Navbar></Navbar>
          <Splash></Splash>
          <About></About>
          <PortfolioList projects={ projects } ></PortfolioList>
          <Contact></Contact>
          <Footer></Footer>
      </div>
    )
    } 
}

export default App;
