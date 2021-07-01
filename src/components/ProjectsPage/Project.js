import React from 'react'

export default function Project({ info }) {
    const {
        projectname,
        projectdesc,
        projectimg,
        projectlink
    } = info

    return (
        <div style={{ background: `url(${projectimg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} className="project">
            <div className="project-info-overlay">
                <div className="project-info">
                    <h2>{projectname}</h2>
                    <p>{projectdesc}</p>
                    <a href={projectlink} target="_blank" rel="noreferrer" className="see-more">SEE MORE &#62;</a>
                </div>
            </div>
        </div>
    )
}
