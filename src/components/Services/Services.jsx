import React, { useState } from 'react'
import "./services.css"

function Services() {
    const [openModal,setOpenModal]=useState(0);

    const toggleTab = (index) => {
        setOpenModal(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Web <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={()=>toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>

                    <div className={openModal===1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">
                            Web Designer
                            </h3>
                            <p className="services__modal-description">
                                Service with more than 2 years of experience.
                                Providing quality work to clients and
                                companies.
                            </p>

                            <ul className="services__modal-services grid">
                                {['I develop the user interface.',
                                    'Web page development',
                                    'I cretae ux element Interaction',
                                    'I position your company brand',
                                    'Design and mockups of products for companies'
                                ].map((item,index) => (
                                    <li className="services__modal-service" key={index}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {item}
                                    </p>
                                </li>
                                ))}
                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Ui/Ux <br/> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={()=>toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>

                    <div className={openModal===2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">
                            Ui/Ux Designer
                            </h3>
                            <p className="services__modal-description">
                                Service with more than 2 years of experience.
                                Providing quality work to clients and
                                companies.
                            </p>

                            <ul className="services__modal-services grid">
                                {['I develop the user interface.',
                                    'Web page development',
                                    'I cretae ux element Interaction',
                                    'I position your company brand',
                                    'Design and mockups of products for companies'
                                ].map((item,index) => (
                                    <li className="services__modal-service" key={index}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {item}
                                    </p>
                                </li>
                                ))}
                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            Product <br/> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={()=>toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>

                    <div className={openModal===3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times 
                            services__modal-close"></i>

                            <h3 className="services__modal-title">
                                Product Designer
                            </h3>
                            <p className="services__modal-description">
                                Service with more than 2 years of experience.
                                Providing quality work to clients and
                                companies.
                            </p>

                            <ul className="services__modal-services grid">
                                {['I develop the user interface.',
                                    'Web page development',
                                    'I cretae ux element Interaction',
                                    'I position your company brand',
                                    'Design and mockups of products for companies'
                                ].map((item,index) => (
                                    <li className="services__modal-service" key={index}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {item}
                                    </p>
                                </li>
                                ))}
                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
