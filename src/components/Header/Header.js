import React from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom'

export default withRouter(function Header(props) {
    const { changeMode, mode } = props

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            style={mode === true ? { color: 'white' } : { color: 'black' }}
                            className={props.location.pathname === '/' ? 'active' : ''}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            style={mode === true ? { color: 'white' } : { color: 'black' }}
                            className={props.location.pathname === '/about' ? 'active' : ''}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            style={mode === true ? { color: 'white' } : { color: 'black' }}
                            className={props.location.pathname === '/contact' ? 'active' : ''}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" onClick={() => changeMode(prevMode => !prevMode)} defaultChecked={mode === true ? true : false} />
                        <div className="slider round"></div>
                    </label>
                    <i className={mode === true ? 'fa fa-moon-o' : 'fa fa-sun-o'}></i>
                </div>
            </nav>
        </header>
    )
})
