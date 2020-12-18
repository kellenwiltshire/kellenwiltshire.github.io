import React from 'react'

const splash = () => {
    return (
        <div className="splash">
            <h1 className="splash-text">Hi, I'm Kellen Wiltshire. I'm a Web Developer (in training)</h1>
            <div className="arrow">
                <a href="#about">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
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