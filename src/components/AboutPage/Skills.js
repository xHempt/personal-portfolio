import React from 'react'
import Skill from './Skill'

export default function Skills() {
    const skills = [
        {
            skillname: 'HTML5',
            level: 5
        },
        {
            skillname: 'CSS3',
            level: 4
        },
        {
            skillname: 'JS',
            level: 3
        },
        {
            skillname: 'ReactJS',
            level: 3
        }
    ]

    return (
        <div className="skills">
            {skills.map((skill, index) => (<Skill name={skill.skillname} key={index} level={skill.level} />))}
        </div>
    )
}
