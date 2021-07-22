import React from 'react'
import './ContactPage.css'
import ContactForm from './ContactForm'

export default function ContactPage({ mode }) {
    return (
        <div className="contact-page">
            <div className="contact-headline">
                <h1>LET'S <span className="highlight">TALK</span></h1>
                <ContactForm mode={mode} />
            </div>
            <div className="contact-extras">
                <h1>FIND ME <span className="highlight">HERE</span></h1>
                <div className="contact-links">

                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noreferrer" 
                    >
                        <i className="fa fa-facebook"></i><h3>&#62; Facebook</h3>
                    </a>

                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer" 
                    >
                        <i className="fa fa-instagram"></i><h3>&#62; Instagram</h3>
                    </a>

                    <span><i className="fa fa-envelope"></i> <h3>nowacki884@gmail.com</h3></span>
                    <span><i className="fa fa-phone"></i> <h3>+48 885-242-230</h3></span>
                </div>
            </div>
        </div>
    )
}
