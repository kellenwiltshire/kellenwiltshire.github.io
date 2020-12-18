import React from 'react'

const navbar = () => {

    // const showMenu = () => {
    //     if ('menu-drop'.style.visibility === "hidden" ? 'menu-drop'.style.visibility = "visible" : 'menu-drop'.style.visibility = "hidden");
    // }


    return(

        <div class="navbar">
            <div class="company">
            <div class="company-name">
                <a class="nav-title" href="#">K.W. Web Development</a>
            </div>
            </div>
            <div class="menu-items">
            <div class="container">
                <a class="item" href="#">Home</a>
            </div>
            <div class="container">
                <a class="item" href="#">About</a>
            </div>            
            <div class="item">
                Products
                <div id="dropdown" class="dropdown-content">
                <a href="#">Pricing</a>
                <a href="#">Portfolio</a>
                </div>
            </div>
            <div class="container">
                <a class="item" href="#">Contact Me</a> 
            </div>            
            </div>
            <div class="hamburger">
            <div class="menu" /*! onClick=showMenu()  TODO */>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
            </div>  
            </div>   
            <div id="menu-drop" class="menu-content">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Pricing</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact Me</a>
            </div> 
        </div>
        
    );
}

export default navbar;