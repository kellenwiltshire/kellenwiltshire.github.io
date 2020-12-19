import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Navbar.css'
import './components/Splash.css'
import './components/Footer.css'
import './components/About.css'
import './components/Portfolio.css'
import './components/pricing.css'
import 'tachyons'
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
