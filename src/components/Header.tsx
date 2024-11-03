import React from 'react'
import HeaderImage from "./HeaderImage"

export default function Header() {
    return (
        <header className="container">
            <div className="content">
                <h4>Fortunately, not all dodos have gone extinct <img src="images/logo2.png" />🔥🔥🔥</h4>
                <h1><span>Dorian</span>, Software Engineer</h1>
                <p>
                    Hi, I'm Dorian - Code crafter since 2016,
                    I'm a collaboratively driven developer,
                    eager to continousely learn.
                    I bring a well-rounded tech skill set to every project.
                    <ul>
                        <li>
                            <p>
                                <i className="fa-solid fa-people-group"></i>
                                I'm a team player who enjoys sharing knowledge
                                with my teammates. Communication comes naturally to me,
                                and I love attending co-working events.
                                I'm passionate about helping the team grow and evolve together
                            </p>
                        </li>
                        <li>
                            <p>
                                <i className="fa-solid fa-graduation-cap"></i>
                                In my free time, I actively train myself and pursue
                                certifications to solidify my knowledge.
                                I'm curious and driven to explore various domains,
                                including problem-solving, programming languages, frameworks,
                                and machine learning. I regularly take MOOCs to stay
                                updated and am not afraid to dive into new technologies.
                            </p>
                        </li>
                        <li>
                            <p>
                                <i className="fa-solid fa-list-check"></i>
                                I am a well-rounded developer with experience in software
                                design and development. I have managed application costs during the design process
                                and am proficient in both Object-Oriented Programming (OOP) and Railway Oriented Programming (ROP). With a background in various languages and frameworks, I bring expertise in both front-end and back-end development.
                            </p>
                        </li>
                    </ul>

                </p>
            </div>
            <div className="image">
                <HeaderImage />
            </div>
        </header>
    )
}