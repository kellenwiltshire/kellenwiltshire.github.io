import React from 'react'
import ProfilePic from '../img/profile.png'

const about = () => {
    return(
        <div className="container about">
            <div class="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src={ProfilePic} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Profile"/>
                    <h1 class="f3 mb2">Kellen Wiltshire</h1>
                    <h2 class="f5 fw4 gray mt0">Kingston, Ontario, Canada</h2>
                </div>
            </div>
            <div className="about-text">
                <p>Kellen started self teaching himself Web Development in 2020 with the extra time he had during the pandemic. 
                He graduated from the University of Ontario Institute of Technology in 2012. Although initially enrolled in Game Development he switch to Legal Studies.
                Although he was able to find a fulfilling career helping people seek justice in the Legal System, he missed using his brain in a technical role. With the extra time working from home he decided to start teaching 
                himself Web Development with the help of the Udemy court Zero-to-Mastery.</p>

                <p>Now he builds websites and projects to hone his skills to make the jump completely into Web Development. Contact him now if you have any inquries!</p>
            </div>
        </div>
    )
}

export default about;

