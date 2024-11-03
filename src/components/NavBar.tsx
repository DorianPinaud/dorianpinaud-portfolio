import React from 'react'

export default function NavBar() {

    const scrollToView = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, elementId: string) => {
        e.preventDefault()
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav>
            <a href="#" >
                <div className='logo'>
                    <img src="images/logo.png" />
                </div>
            </a>
            <ul className="nav-links">
                <li className='link'><a onClick={(e) => scrollToView(e, "experiences")}>Experiences</a></li>
                <li className='link'><a onClick={(e) => scrollToView(e, "skills")}>Skills</a></li>
                <li className='link'><a onClick={(e) => scrollToView(e, "projects")}>Projects</a></li>
            </ul>
            <a className='btn' href='mailto:dorian.pinaud@gmail.com'>Hire Me</a>
        </nav>
    )
}
