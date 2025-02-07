import React from 'react'

function BackSkills() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "85%" }}></div>
                            </div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Express</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "85%" }}></div>
                            </div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">My SQL</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "70%" }}></div>
                            </div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">EJS</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "75%" }}></div>
                            </div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Hbs</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "75%" }}></div>
                            </div>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: "80%" }}></div>
                            </div>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackSkills
