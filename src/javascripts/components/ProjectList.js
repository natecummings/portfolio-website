import React, { useState }from 'react'
import Project from './Project'
import { Projects } from './Projects'

export default function ProjectList() {
  const [projects, setProjects] = useState(Projects)
  return(
    <div id="portfolio">
      <div className="content-light">
        <center>
          <h1>Portfolio</h1>
          {projects.map(p => {
            return (
              <>
                <Project key={p.id} project={p}/>
                <div id="buffer"></div>
              </>
            )
          })}
        </center>
      </div>
    </div>
    
  );
}