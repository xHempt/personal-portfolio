import React from 'react'
import './AboutPage.css'
import me from '../../media/zdjecie.jpg'

export default function AboutPage() {
    return (
        <div className="about-page">
            <img src={me} alt="David's face" />
            <h2 className="highlight">Dawid Nowacki</h2>
            <h3>Web developer, graphic designer</h3>
            <p>“Work smart, not hard!” - that’s my motto. The true beauty is in simplicity. I’ve been making websites for 3 years, profesionally for over 3 months. To me a good website is a good looking website, so that’s my main focus.</p>
        </div>
    )
}
