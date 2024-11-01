import React from 'react'

export default function Footer() {
    return (
        <footer className="container">
            <div className="column">
                <div className="logo">
                    <img src="images/logo.png" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Natus distinctio
                    officiis corporis deserunt neque maiores
                    aliquid aspernatur ea placeat animi nisi
                </p>
                <div className="socials">
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="column">
                <h4>Compagny</h4>
                <a href="#">Business</a>
                <a href="#">Partnership</a>
                <a href="#">Network</a>
            </div>
            <div className="column">
                <h4>About Us</h4>
                <a href="#">Blogs</a>
                <a href="#">Channels</a>
                <a href="#">Network</a>
            </div>
            <div className="column">
                <h4>Contact</h4>
                <a href="#">Contact Us</a>
                <a href="#">Privacy & Policy</a>
                <a href="#">Term & Conditions</a>
            </div>
        </footer >
    )
}
