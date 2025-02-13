import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const educationData = [
    {
      title: "MERN Stack Development",
      subtitle: "Brototype - Calicut",
      date: "2022 - 2023",
      // icon: "uil uil-graduation-cap",
    },
    {
      title: "Higher Secondary",
      subtitle: "PTM HSS - Thrikkattiri",
      date: "2020 - 2022",
      // icon: "uil uil-graduation-cap",
    },
  ];

  const experienceData = [
    {
      title: "FrontEnd Developer",
      subtitle: "Leeyet - Calicut",
      date: "2025 - Present",
      // icon: "uil uil-briefcase-alt",
    },
    {
      title: "MERN Stack Developer Internship",
      subtitle: "Techoriz - Calicut",
      date: "2022 - 2023",
      // icon: "uil uil-briefcase-alt",
    },
  ];

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            <span className="qualification__text">Education</span>
          </div>
          <div
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            <span className="qualification__text">Experience</span>
          </div>
        </div>

        <div className="qualification__sections">
          {toggleState === 1 && (
            <VerticalTimeline>
              {educationData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--education"
                  date={item.date}
                  iconStyle={{ background: 'var(--title-color-dark)', color: '#fff' }}
                  icon={<i className={item.icon}></i>}
                >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          )}

          {toggleState === 2 && (
            <VerticalTimeline>
              {experienceData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  date={item.date}
                  iconStyle={{ background: 'var(--title-color-dark)', color: '#fff' }}
                  icon={<i className={item.icon}></i>}
                >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          )}
        </div>
      </div>
    </section>
  );
}

export default Qualification;