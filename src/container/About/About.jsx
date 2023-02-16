import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { GiCosmicEgg } from "react-icons/gi";
import { SlGhost } from "react-icons/sl";
import { MdOutlineAppRegistration } from "react-icons/md";

var abouts = [
  {
    icon: GiCosmicEgg,
    description:
      "Event Master was created by a passionate event planning enthusiast who wanted to bring their own experience and expertise to the event planning industry. With the aim of simplifying the event planning process and making it more accessible, Event Master was born.",
  },
  {
    icon: SlGhost,
    description:
      "Whether you're a seasoned event planner or a first-time host, Event Master has everything you need to plan your event with confidence. Our comprehensive features, including event creation and management, guest management, task management, budget tracking, vendor management, and communication tools, ensure that you have all the information and resources you need to make your event a success.",
  },
  {
    icon: MdOutlineAppRegistration,
    description:
      "At Event Master, we're dedicated to helping you make the most of your events, no matter how big or small. Whether you're planning a wedding, a corporate event, or a personal celebration, our app provides you with the tools and resources you need to execute your event flawlessly. So why wait? Sign up for Event Master today and take the first step towards creating an event that's unforgettable.",
  },
];

function About() {
  return (
    <>
      <div name="about" className="app__abouts">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__abouts-item"
            >
              <about.icon className="icons" style={{}} />
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default About;
