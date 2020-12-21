import React from 'react'

const splash = () => {
    return (
        <div className="splash h-screen flex items-center justify-center">
            <header className="text-3xl text-white bg-black bg-opacity-20 p-4 rounded">
                <h1>
                Hi, I'm Kellen Wiltshire
                </h1>
                <h2>
                I'm a Web Developer (in training)
                </h2>
            </header>

            <div className="arrow animate-bounce">
                <a href="#about">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="18" y1="13" x2="12" y2="19" />
                    <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default splash;