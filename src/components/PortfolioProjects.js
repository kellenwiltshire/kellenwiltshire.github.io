import React from 'react';

const portfolioProjects = ({ id, name, description, tools, link, git, img }) =>{
    return (
        <div class="sm:w-3/12 shadow-2xl p-5" id="proj1">
            <img class="proj-Image" src={img} alt=""/>
            <div class="text-center justify-center align-middle flex flex-col h-auto m-3 sm:text-xs">
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="flex flex-row align-middle justify-center">
                    <a href={git} alt="View on Github" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        Github
                    </a>
                    <a href={link} alt="View in Action" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-browser" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="1" />
                        <line x1="4" y1="8" x2="20" y2="8" />
                        <line x1="8" y1="4" x2="8" y2="8" />
                        </svg>
                        Web
                    </a>
                </div>
            </div>
        </div>

    );
}

export default portfolioProjects;