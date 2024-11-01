import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <a href="#" >
                <div className='logo'>
                    <img src="images/logo.png" />
                </div>
            </a>
            <ul className="nav-links">
                <li className='link'><a href="3">Home</a></li>
                <li className='link'><a href="3">Skills</a></li>
                <li className='link'><a href="3">Projects</a></li>
                <li className='link'><a href="3">About</a></li>
            </ul>
            <button className='btn'>Hire Me</button>
        </nav>
    )
}
