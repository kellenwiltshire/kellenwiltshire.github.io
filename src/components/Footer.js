import React from 'react'

const footer = () => {
    return (
        <footer className="flex flex-wrap flex-row text-center bg-black h-1/6 justify-center content-center">
        {/* Github  */}
        <a href="https://github.com/kellenwiltshire">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
        </a>
        {/* <!-- Instagram --> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#F44336" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
        {/* <!-- Linkedin --> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#F44336" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
        {/* <!-- Codepen --> */}
        <a href="https://codepen.io/kellenwiltshire">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
            <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
            <line x1="3" y1="9" x2="3" y2="15" />
            <line x1="21" y1="9" x2="21" y2="15" />
            <line x1="12" y1="3" x2="12" y2="9" />
            <line x1="12" y1="15" x2="12" y2="21" />
        </svg>
        </a>
        <h1 className="w-screen text-gray-700">Copyright 2020 Kellen Wiltshire</h1>
    </footer>
    )
}

export default footer;