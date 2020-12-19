import React from 'react'

const navbar = () => {

    // const showMenu = () => {
    //     if (menu-drop.style.visibility === "hidden" ? menu-drop.style.visibility = "visible" : menu-drop.style.visibility = "hidden");
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
        </div>
        
    );
}

export default navbar;