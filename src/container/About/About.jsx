import React, { useState } from "react";
import "./About.scss";
import { GiCosmicEgg } from "react-icons/gi";
import { SlGhost } from "react-icons/sl";
import { MdOutlineAppRegistration } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

var abouts = [
  {
    icon: <GiCosmicEgg className="app__abouts-slider-icons" />,
    description:
      "Event Master was created by a passionate event planning enthusiast who wanted to bring their own experience and expertise to the event planning industry. With the aim of simplifying the event planning process and making it more accessible, Event Master was born.",
  },
  {
    icon: <SlGhost className="app__abouts-slider-icons" />,
    description:
      "Whether you're a seasoned event planner or a first-time host, Event Master has everything you need to plan your event with confidence. Our comprehensive features, including event creation and management, guest management, task management, budget tracking, vendor management, and communication tools, ensure that you have all the information and resources you need to make your event a success.",
  },
  {
    icon: <MdOutlineAppRegistration className="app__abouts-slider-icons" />,
    description:
      "At Event Master, we're dedicated to helping you make the most of your events, no matter how big or small. Whether you're planning a wedding, a corporate event, or a personal celebration, our app provides you with the tools and resources you need to execute your event flawlessly. So why wait? Sign up for Event Master today and take the first step towards creating an event that's unforgettable.",
  },
];

const variants = {
  initial: (direction) => {
    return { x: direction > 0 ? 200 : -200, opacity: 0 };
  },
  animate: {
    x: 0,
    opacity: 1,
    // transition: "ease-in",
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: "ease-in",
    };
  },
};

function About() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setIndex((index + 1) % abouts.length);
    // If click the next button direction will be set to 1
    setDirection(1);
  }
  function prevStep() {
    setIndex((index - 1 + abouts.length) % abouts.length);
    // If click the next button direction will be set to -1
    setDirection(-1);
  }
  return (
    <>
      <div id="about" className="app__abouts-container">
        <div className="app__abouts-slideshow">
          <div className="app__abouts-slider" key={index}>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__abouts-item"
            >
              {abouts[index].icon}
              <p style={{ marginTop: 10 }} key={index}>
                {abouts[index].description}
              </p>
            </motion.div>
          </div>
          <button className="app__abouts-prevButton button" onClick={prevStep}>
            ◀
          </button>
          <button className="app__abouts-nextButton button" onClick={nextStep}>
            ▶
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
