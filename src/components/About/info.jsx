import React from 'react';

function Info() {
  const infoData = [
    { icon: 'bx bx-award', title: 'Experience', subtitle: '2 Years Working' },
    { icon: 'bx bx-briefcase-alt', title: 'Completed', subtitle: '20+ Projects' },
    { icon: 'bx bx-support', title: 'Support', subtitle: 'Online 24/7' },
  ];

  return (
    <div className="about__info grid">
      {infoData.map((item, index) => (
        <div key={index} className="about__box" data-aos="fade-up">
          <i className={`${item.icon} about__icon`}></i>
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}

export default Info;