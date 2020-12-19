import React from 'react'
import Robofriends from '../img/robofriends.png'

const portfolio = () => {
    return (
        <div className="portfolio">
            <div class="grid-wrapper">
                <div class="box project1" id="proj1">
                    <img class="proj-Image" src={Robofriends} alt=""/>
                    <div class="project-information" id="projInfo1">
                        <h1>RoboFriends</h1>
                        <p>Robofriends is a React App that utilizes HTML, CSS, and React to create a responsive interface to search your robot friends.</p>
                        <a href="https://github.com/kellenwiltshire/RoboFriends-ztm" alt="View on Github" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </a>
                        <a href="https://kellenwiltshire.github.io/RoboFriends-ztm/" alt="View in Action" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-longitude" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M11.5 3a11.2 11.2 0 0 0 0 18" />
                            <path d="M12.5 3a11.2 11.2 0 0 1 0 18" />
                            <line x1="12" y1="3" x2="12" y2="21" />
                        </svg>
                        </a>
                    </div>
                </div>
                <div class="box project2" id="proj2">
                    <img class="proj-Image" src="img/keyboard.jpg" alt=""/>
                    <div class="project-information" id="projInfo2">
                        <h1>Amazing Project</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reiciendis nihil ex consectetur exercitationem impedit delectus aliquam asperiores eos iusto, beatae, molestias similique nesciunt totam ipsa tempora minus incidunt accusantium.</p>
                    </div>
                </div>
                <div class="box project3" id="proj3">
                    <img class="proj-Image" src="img/mountain.jpg" alt=""/>
                    <div class="project-information" id="projInfo3">
                        <h1>Amazing Project</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reiciendis nihil ex consectetur exercitationem impedit delectus aliquam asperiores eos iusto, beatae, molestias similique nesciunt totam ipsa tempora minus incidunt accusantium.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default portfolio;