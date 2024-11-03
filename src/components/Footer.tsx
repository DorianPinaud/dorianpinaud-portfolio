import React from 'react'

export default function Footer() {
    return (
        <footer className="container">
            <div className="column">
                <div className="logo">
                    <img src="images/logo.png" />
                </div>
                <p>
                    Thank you for exploring my portfolio! I'm excited about new opportunities
                    that push my skills further, and I'm always eager to learn new things
                    and connect with people who share a passion for innovation. I'm looking forward
                    to the possibility of collaborating on something meaningful!
                </p>
                <div className="socials">
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/DorianPinaud"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="column">
                <h4>Compagny & School</h4>
                <a href="https://www.agueris.com/">Agueris</a>
                <a href="https://www.stillatechnologies.com/">Stilla Technologies</a>
                <a href="https://www.epitech.eu/">Epitech</a>
                <a href="https://www.kent.ac.uk/">Kent University</a>
            </div>
            <div className="column">
                <h4>About Me</h4>
                <a href="./Dorian_Pinaud_EN.pdf">CV (en)</a>
                <a href="./Dorian_Pinaud_FR.pdf">CV (fr)</a>
            </div>
            <div className="column">
                <h4>Contact</h4>
                <a href="mailto:dorian.pinaud@gmail.com">Gmail</a>
            </div>
        </footer >
    )
}
