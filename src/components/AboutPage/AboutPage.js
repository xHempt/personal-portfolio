import React from 'react'
import './AboutPage.css'
import Skills from './Skills'
import me from '../../media/zdjecie.jpg'

export default function AboutPage() {
    return (
        <div className="about-page">
            <h1>ABOUT <span className="highlight">ME</span></h1>
            <div className="about">
                <img src={me} alt="David's face" />
                <div className="about-info">
                    <h2 className="highlight">Dawid Nowacki</h2>
                    <h3>Web developer, UI/UX and graphic designer</h3>
                    <p>“Work smart, not hard!” - that’s my motto. The true beauty is in simplicity. I’ve been making websites for 3 years, profesionally for over 3 months. To me a good website is a good looking website, so that’s my main focus.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat animi tenetur facilis vel maxime numquam rerum illo id debitis, voluptate nam dolore ea doloribus dicta dolorem ullam mollitia aperiam consectetur? Porro eligendi, suscipit et, totam corrupti magni tenetur ex mollitia nulla, labore at cupiditate illum beatae! Delectus illo unde deserunt!</p>
                </div>
            </div>
            <Skills />
        </div>
    )
}
