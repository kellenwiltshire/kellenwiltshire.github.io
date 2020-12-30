import React from 'react'

const navbar = () => {

  

  const showMenu = () => {
    const menuItems = document.getElementById("menu-drop");
    if (menuItems.style.visibility === "hidden" ? menuItems.style.visibility = "visible" : menuItems.style.visibility = "hidden");
  }

  return(

      <nav>
        <div className="navbar">
          <div className="company">
            <div className="company-name">
              <a className="nav-title" href="#">Kellen Wiltshire</a>
            </div>
          </div>
            <div className="menu-items">
              <div className="cont">
                <a className="item" href="#">Home</a>
              </div>
              <div className="cont">
                <a className="item" href="#">About</a>
              </div>            
              <div className="item">
                Products
                <div id="dropdown" className="dropdown-content">
                  <a href="#">Pricing</a>
                  <a href="#">Portfolio</a>
                </div>
              </div>
              <div className="cont">
                <a className="item" href="#">Contact Me</a> 
              </div>            
            </div>
            <div className="hamburger">
              <div className="menu" onClick={showMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </div>  
            </div>    
        </div>
        <div id="menu-drop" className="menu-content">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact Me</a>
        </div>
      </nav>
      
        
    );
}

export default navbar;