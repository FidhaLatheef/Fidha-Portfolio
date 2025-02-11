import React from 'react';
import { motion } from 'framer-motion';

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Info() {
  return (
    <div className="about__info grid">
      {[
        { icon: 'bx bx-award', title: 'Experience', subtitle: '2 Years Working' },
        { icon: 'bx bx-briefcase-alt', title: 'Completed', subtitle: '20 + Projects' },
        { icon: 'bx bx-support', title: 'Support', subtitle: 'Online 24/7' },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="about__box"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <i className={`${item.icon} about__icon`}></i>
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default Info;