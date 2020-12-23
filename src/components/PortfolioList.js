import React from 'react'
import PortfolioProjects from './PortfolioProjects'

const portfolioList = ({projects}) => {
    return (
        <div className="w-screen p-10 flex flex-row justify-center">
            {
                projects.map((proj, i) => {
                    return <PortfolioProjects 
                    key={i}
                    id={projects[i].id}
                    name={projects[i].name}
                    description={projects[i].description}
                    tools={projects[i].tools}
                    link={projects[i].link}
                    git={projects[i].git}
                    img={projects[i].img}
                    ></PortfolioProjects>
                })
            }
        </div>
    )
}

export default portfolioList;