import React from 'react'
import "./qualification.css"

function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
      <div className="qualification__tabs">
  <div className="qualification__button qualification__active button--flex">
    <i className="uil uil-graduation-cap qualification__icon"></i>
    <span className="qualification__text">Education</span>
  </div>
  <div className="qualification__button button--flex">
    <i className="uil uil-briefcase-alt qualification__icon"></i>
    <span className="qualification__text">Experience</span>
  </div>
</div>

        <div className="qualification__sections">
          <div className="qualification__content
          qualification__content--active">
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  FrontEnd Developer
                </h3>
                <span className="qualification__subtitle">
                  Leeyet - Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2025 - Present
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  MernStack Developer Internship
                </h3>
                <span className="qualification__subtitle">
                  Techoriz - Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2022-2023
                  </i>
                </div>
              </div>



            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  MernStack Development
                </h3>
                <span className="qualification__subtitle">
                  Brototype - Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2022-2023
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Higher Secondary
                </h3>
                <span className="qualification__subtitle">
                  PTM HSS - Thrikkattiri
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2020-2022
                  </i>
                </div>
              </div>

            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  FrontEnd Developer
                </h3>
                <span className="qualification__subtitle">
                  Leeyet - Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2025 - Present
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  MernStack Developer Internship
                </h3>
                <span className="qualification__subtitle">
                  Techoriz - Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2022-2023
                  </i>
                </div>
              </div>



            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  MernStack Development
                </h3>
                <span className="qualification__subtitle">
                  Brototype - Calicut
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    2022-2023
                  </i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
