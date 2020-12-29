import React from 'react'

const splash = () => {
    return (
        <div className="splash h-screen flex flex-col items-center justify-center">
            <header className="text-3xl text-white bg-black bg-opacity-50 py-4 px-10 rounded">
                <h1>
                Hi, I'm Kellen Wiltshire
                </h1>
                <h2>
                I'm a Web Developer (in training)
                </h2>
            </header>

            <div className="flex flex-row align-middle justify-center bg-black bg-opacity-50 rounded mt-16 text-white py-4 px-10">
                <a href="https://github.com/kellenwiltshire" alt="View on Github" target="_blank">
                    <svg className="px-4" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        Github
                </a>
                <a href="https://codepen.io/kellenwiltshire">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-codepen" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
                        <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                        <line x1="3" y1="9" x2="3" y2="15" />
                        <line x1="21" y1="9" x2="21" y2="15" />
                        <line x1="12" y1="3" x2="12" y2="9" />
                        <line x1="12" y1="15" x2="12" y2="21" />
                    </svg>
                    Codepen
                </a>
            </div>
        </div>
    )
}

export default splash;