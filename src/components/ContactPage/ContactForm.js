import axios from 'axios'
import React, { useRef } from 'react'

export default function ContactForm({ mode }) {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const subjectRef = useRef('')
    const contentRef = useRef('')

    function sendMail(e) {
        e.preventDefault()

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            content: contentRef.current.value
        }

        axios.post('/api/sendmail', payload)
            .then((res) => {
                console.log(res.data)
                window.location.reload()
            })
            .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={sendMail}>
            <label htmlFor="name">Full Name<span className="highlight">*</span></label>
            <input type="text" name="name" id="name"  style={mode === true ? { color: '#fff' } : { color: '#333' }} required ref={nameRef} />
            <label htmlFor="email">E-Mail<span className="highlight">*</span></label>
            <input type="email" name="email" id="email"  style={mode === true ? { color: '#fff' } : { color: '#333' }} required ref={emailRef} />
            <label htmlFor="subject">Subject<span className="highlight">*</span></label>
            <select name="subject" id="subject" ref={subjectRef}>
                <option value="website design">Website Design</option>
                <option value="web development">Web Development</option>
                <option value="graphic design">Graphic Design</option>
                <option value="logo design">Logo Design</option>
                <option value="other">Other</option>
            </select>
            <label htmlFor="content">Your message here<span className="highlight">*</span></label>
            <textarea name="content" id="content" style={mode === true ? { color: '#fff' } : { color: '#333' }} ref={contentRef}></textarea>
            <button type="submit" className="see-more">SEND</button>
        </form>
    )
}
