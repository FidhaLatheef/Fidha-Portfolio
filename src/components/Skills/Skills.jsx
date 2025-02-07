import React from 'react'
import "./skills.css"
import { motion } from "framer-motion";
import BackSkills from "./BackSkills"
import FrontSkills from './FrontSkills'

function Skills() {
    return (
        <section className="skills section" id="skills" data-aos="fade-down">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <motion.div
                className="skills__container container grid"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <FrontSkills />
                <BackSkills />
            </motion.div>
        </section>
    )
}

export default Skills
