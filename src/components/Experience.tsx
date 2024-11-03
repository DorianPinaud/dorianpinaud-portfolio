import React from 'react'

export default function Experience() {
    return (
        <section id="experiences" className="container">
            <h2 className="header">EXPERIENCES</h2>
            <ul className='timeline'>

                <li>
                    <div className='event'>
                        <h3 className="title">
                            Epitech, the beginning
                        </h3>
                        <p>
                            Beginning my coding journey at Epitech Paris
                        </p>
                        <a href='https://www.epitech.eu/'>About Epitech...</a>
                        <span className='circle'></span>
                        <span className='date'>September 2011</span>
                    </div>
                </li>
                <li>
                    <div className='event'>
                        <h3 className="title">
                            Total Energies, First internship
                        </h3>
                        <p>
                            Completed a six-month internship in the IT sector
                            at Total Energies, where I developed software for
                            systems mapping.
                        </p>
                        <span className='circle'></span>
                        <span className='date'>September 2012</span>
                    </div>
                </li>
                <li>
                    <div className='event'>
                        <h3 className="title">
                            Rendr, the first startup
                        </h3>
                        <p>
                            Completed a five-month internship in the compagny Rendr,
                            where I worked on a real-time raytracing engine project.
                        </p>
                        <a href='https://www.rendr.fr/'>About Rendr...</a>
                        <span className='circle'></span>
                        <span className='date'>August 2014</span>
                    </div>
                </li>
                <li>
                    <div className='event'>
                        <h3 className="title">
                            A Year Aboard
                        </h3>
                        <p>
                            One year of study at the University of Kent towards a degree in Computer Science
                        </p>
                        <a href='https://www.kent.ac.uk/'>About Kent University...</a>
                        <span className='circle'></span>
                        <span className='date'>September 2015</span>
                    </div>
                </li>
                <li>
                    <div className='event'>
                        <h3 className="title">
                            Epitech, the end
                        </h3>
                        <p>
                            After five years at Epitech Paris, finally the graduation.
                        </p>
                        <span className='circle'></span>
                        <span className='date'>2016</span>
                    </div>
                </li>
                <li>
                    <div className='event'>
                        <h3 className="title">
                            Agueris, First position as Full Stack Developer
                        </h3>
                        <p>
                            Beginning my career at Agueris, I gained six years of experience
                            in training simulator development across various industries.
                            Starting with software development for armored vehicle simulators (2016-2018),
                            I advanced to lead roles, overseeing development and contributing to
                            project management and pre-sales for the Virtual Maintenance Trainer (2018-2020).
                            At the end, I led software design and architectural documentation
                            for a military training simulator (2020-2021).
                            Additionally, I provided internal training on our tech stack,
                            fostering team growth and expertise.
                        </p>
                        <a href='https://agueris.com/'>About Agueris...</a>
                        <span className='circle'></span>
                        <span className='date'>March 2016-2022</span>
                    </div>
                </li>
                <li>
                    <div className='event'>
                        <h3 className="title">
                            Stilla Technologies, Senior Full Stack Developer
                        </h3>
                        <p>
                            At Stilla Technologies, a digital PCR startup, I worked as a senior software engineer,
                            where I developed software for DNA analysis instruments and medical image analysis tools.
                            This role allowed me to leverage my frontend and backend framework experience,
                            enhancing both the user interface and functionality of our applications.
                            I also honed my skills in rigorous CI practices and in the Scrum methodology,
                            which structured our agile development processes and ensured high-quality,
                            iterative improvements
                        </p>
                        <a href='https://www.stillatechnologies.com/'>About Stilla Technologies...</a>
                        <span className='circle'></span>
                        <span className='date'>July 2022-2024</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}
