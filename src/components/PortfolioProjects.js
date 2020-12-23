import React from 'react';

const portfolioProjects = ({ id, name, description, tools, link, git, img }) =>{
    return (
        <div class="project w-4/12 shadow-2xl p-5" id="proj1">
            <img class="proj-Image" src={img} alt=""/>
            <div class="project-information justify-center align-middle flex flex-col h-auto m-3">
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="flex flex-row align-middle justify-center">
                    <a href={git} alt="View on Github" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                    <a href={link} alt="View in Action" target="_blank">
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
        </div>

    );
}

export default portfolioProjects;