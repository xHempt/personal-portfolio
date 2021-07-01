import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Project from './Project'
import Loading from './Loading'

export default function Projects() {
    const [projects, setProjects] = useState()

    useEffect(() => {
        axios.get('/api/getprojects')
            .then((response) => setProjects(response.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {projects !== undefined ?
                <div className="projects">
                    {projects.map((project, index) => (
                        <Project key={index} info={project} />
                    ))}
                </div>
                : <Loading />}
        </>
    )
}
