import React, { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiCosmicEgg } from "react-icons/gi";
import { SlGhost } from "react-icons/sl";
import { MdOutlineAppRegistration } from "react-icons/md";

import "./Scroll_test.scss";

var abouts = [
  {
    icon: <GiCosmicEgg className="icons" />,
    description:
      "Event Master was created by a passionate event planning enthusiast who wanted to bring their own experience and expertise to the event planning industry. With the aim of simplifying the event planning process and making it more accessible, Event Master was born.",
  },
  {
    icon: <SlGhost className="icons" />,
    description:
      "Whether you're a seasoned event planner or a first-time host, Event Master has everything you need to plan your event with confidence. Our comprehensive features, including event creation and management, guest management, task management, budget tracking, vendor management, and communication tools, ensure that you have all the information and resources you need to make your event a success.",
  },
  {
    icon: <MdOutlineAppRegistration className="icons" />,
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

const Scroll_test = () => {
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
      <div className="app__test-container">
        <div className="slideshow">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              alt="sliders"
              className="test-slider"
              // Pass the variable direction by using custom
              key={index}
              custom={direction}
            >
              {abouts[index].icon}
              <p className="p-text" style={{ marginTop: 10 }} key={index}>
                {abouts[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <button className="prevButton button" onClick={prevStep}>
            ◀
          </button>
          <button className="nextButton button" onClick={nextStep}>
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default Scroll_test;
