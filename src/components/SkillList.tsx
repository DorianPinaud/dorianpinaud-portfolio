import React from 'react'
import ProgrammingSkill from './Skills/ProgrammingSkill'
import MachineLearningSkill from './Skills/MachineLearningSkill'
import ArchitectureSkill from './Skills/ArchitectureSkill'
import ProblemSolvingSkill from './Skills/ProblemSolvingSkill'

export default function SkillList() {
    return (
        <section id="skills" className="container">
            <h2 className="header">MY SKILLS</h2>
            <div className="features">
                <ProgrammingSkill />
                <MachineLearningSkill />
                <ArchitectureSkill />
                <ProblemSolvingSkill />
            </div>
        </section>
    )
}