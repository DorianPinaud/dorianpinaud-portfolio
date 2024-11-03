import React from 'react'
import AGEProject from './Projects/AGEProject'
import PlotterDioxusProject from './Projects/PlotterDioxusProject'
import ColorNoKamiProject from './Projects/ColorNoKamiProject'

export default function ProjectList() {
    return (
        <section id="projects" className="container">
            <h2 className="header">MY PROJECTS</h2>
            <div className="projects">
                <AGEProject />
                <PlotterDioxusProject />
                <ColorNoKamiProject />
            </div>
        </section>
    )
}
