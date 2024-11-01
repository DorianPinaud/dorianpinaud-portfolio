import React from 'react'

export default function WhatGoodSoftwareArchitect() {
    return (
        <div className='card'>
            <h1>What's a good Software Architect ?</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IwrvE-wHm84?si=v1jO7JfxlLo_O6gd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2>Resume</h2>
            <ul>
                <li>
                    <p><strong>Zoom In and out</strong> - Be able to considerate the application on different level. Low level means understand
                        how things works on specific components without losing the global vision of how the application works in general.</p>
                </li>
                <li>
                    <p><strong>Domain sensitive</strong> - Very well understand the business domain where you work.
                        Always takes it account on architecture decision.</p>
                </li>
                <li>
                    <p><strong>Understand tradeoff</strong> - Be able to considerate the pro and cons of every architecture decision.</p>
                </li>
                <li>
                    <p><strong>Selfless decision maker</strong> - Don't choose technology you want to work with but instead pertinent one.</p>
                </li>
                <li>
                    <p><strong>Embrace change</strong> - Accept that every change in the architecture always happen</p>
                </li>
                <li>
                    <p><strong>Communicative mastery</strong> - Use every support (UML, diagram, pseudo code) to communicate your idea with the team.</p>
                </li>
                <li>
                    <p><strong>Infrastructure Aware</strong> - Be interested about DevOps skill, cloud architecture, distributed system.</p>
                </li>
                <li>
                    <p><strong>Strategic Coder</strong> - Know when to put effort on some code, don't waste time to be suck into code.</p>
                </li>
                <li>
                    <p><strong>Consider scale</strong> - Considarete the scale up of the architecture at the begining to avoid big refactoring</p>
                </li>
                <li>
                    <p><strong>Cost sensitive</strong> - Code is not free and should be taking account when designing application</p>
                </li>
            </ul>
        </div>
    )
}
