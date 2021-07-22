import React from 'react'
import Square from './Square'

export default function Skill({ name, level }) {
    return (
        <div className="skill">
            <h3>{name}</h3>
            <div className="skill-level">
                {Array(level).fill({ x: level }).map((x, index) => (<Square key={index} />))}
            </div>
        </div>
    )
}
