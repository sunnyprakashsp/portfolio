import React, { useState } from 'react';
import "./projects.css";

const Project = () => {
  const [toggleState, setToggleState] = useState(0);


    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <section className="projects section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What i do best</span>

      <div className="projects__container grid">
        <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title">Product <br /> Designer</h3>
          </div>

          <span className="projects__button" onClick={() => toggleTab(1)}>View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "projects__detail active-detail" : "projects__detail"}>
            <div className="projects__detail-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times project__detail-close"></i>

              <h3 className="projects__detail-title">Product Designer</h3>
              <p className="projects__modal-description">Projects with more than 3 years of experience.</p>

              <ul className="projects__detail-projects grid">
                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">I develop the user interface.</p>
                </li>

                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">Web Page Development.</p>
                </li>

                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">Android App Development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-arrow projects__icon"></i>
            <h3 className="projects__title">Ui/Ux <br /> Designer</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="projects__button">View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "projects__detail active-detail" : "projects__detail"}>
            <div className="projects__detail-content">
              <i  onClick={() => toggleTab(0)} className="uil uil-times projects__detail-close"></i>

              <h3 className="projects__detail-title">Ui/Ux Designer</h3>
              <p className="projects__modal-description">Projects with more than 3 years of experience.</p>

              <ul className="projects__detail-projects grid">
                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">I develop the user interface.</p>
                </li>

                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">Web Page Development.</p>
                </li>

                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">Android App Development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-edit projects__icon"></i>
            <h3 className="projects__title">Visual <br /> Designer</h3>
          </div>

          <span onClick={() => toggleTab(3)} className="projects__button">View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "projects__detail active-detail" : "projects__detail"}>
            <div className="projects__detail-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times projects__detail-close"></i>

              <h3 className="projects__detail-title">Visual Designer</h3>
              <p className="projects__modal-description">Projects with more than 3 years of experience.</p>

              <ul className="projects__detail-projects grid">
                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">I develop the user interface.</p>
                </li>

                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">Web Page Development.</p>
                </li>

                <li className="projects__detail-project">
                  <i className="uil uil-check-circle projects__detail-icon"></i>
                  <p className="projects__detail-info">Android App Development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
