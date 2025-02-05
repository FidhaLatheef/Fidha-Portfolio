import React from 'react'
import "./skills.css"
import BackSkills from "./BackSkills"
import FrontSkills from './FrontSkills'

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <FrontSkills />
                <BackSkills />
            </div>
        </section>
    )
}

export default Skills
