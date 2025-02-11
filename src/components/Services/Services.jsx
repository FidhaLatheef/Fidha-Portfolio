import React, { useState } from 'react';
import "./services.css";
import { motion } from "framer-motion";

function Services() {
    const [openModal, setOpenModal] = useState(0);

    const toggleTab = (index) => {
        setOpenModal(index);
    };

    const servicesData = [
        {
            title: "Web Designer",
            icon: "uil uil-web-grid",
            description: "Service with more than 2 years of experience. Providing quality work to clients and companies.",
            services: [
                "I develop the user interface.",
                "Web page development",
                "I create UX element Interaction",
                "I position your company brand",
                "Design and mockups of products for companies"
            ]
        },
        {
            title: "Ui/Ux Designer",
            icon: "uil uil-arrow",
            description: "Service with more than 2 years of experience. Providing quality work to clients and companies.",
            services: [
                "I develop the user interface.",
                "Web page development",
                "I create UX element Interaction",
                "I position your company brand",
                "Design and mockups of products for companies"
            ]
        },
        {
            title: "Product Designer",
            icon: "uil uil-edit",
            description: "Service with more than 2 years of experience. Providing quality work to clients and companies.",
            services: [
                "I develop the user interface.",
                "Web page development",
                "I create UX element Interaction",
                "I position your company brand",
                "Design and mockups of products for companies"
            ]
        }
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {servicesData.map((service, index) => (
                    <motion.div
                        className="services__content"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <div>
                            <i className={`${service.icon} services__icon`}></i>
                            <h3 className="services__title">{service.title}</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(index + 1)}>
                            View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>

                        <div className={openModal === index + 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                                <h3 className="services__modal-title">{service.title}</h3>
                                <p className="services__modal-description">{service.description}</p>

                                <ul className="services__modal-services grid">
                                    {service.services.map((item, i) => (
                                        <li className="services__modal-service" key={i}>
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p className="services__modal-info">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Services;