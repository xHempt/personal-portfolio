import React from 'react'
import './ProjectsPage.css'
import Projects from './Projects'

export default function ProjectsPage() {
    return (
        <div className="projects-page">
            <h1>MY <span className="highlight">PROJECTS</span></h1>
            <Projects />
        </div>
    )
}
