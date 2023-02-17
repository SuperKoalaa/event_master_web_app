import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./Resources.scss";
import { images } from "../../constants";

const resources = [
  {
    name: "Chat GPT",
    bgColor: "white",
    icon: images.chat_gpt_logo,
    description:
      "Using it to create user stories, which outline the different tasks and activities that your users will perform on the website. ",
  },
  {
    name: "Firebase",
    bgColor: "white",
    icon: images.firebase_logo,
    description:
      "Using it to host the website, with automatic scaling and seamless integration with other Firebase services like authentication, real-time database, and storage",
  },
  {
    name: "Github",
    bgColor: "white",
    icon: images.github_logo,
    description:
      "Using it to set up automated tests and deployments, ensuring that the code is always up to date and the website is always live and available to users",
  },
  {
    name: "SASS",
    bgColor: "white",
    icon: images.sass_logo,
    description: "Using it to makes the stylesheets more dynamic and flexible",
  },

  {
    name: "BEM Method",
    bgColor: "white",
    icon: images.bem_logo,
    description:
      "Using it to create modular components that can be easily reused across the website, reducing the time and effort that need to spend on styling.",
  },
  {
    name: "Framer Motion",
    bgColor: "white",
    icon: images.framer_motion_logo,
    description:
      "Using it to add animations to the website, creating a more immersive and interactive user experience.",
  },
];

function Resources() {
  const [openIndex, setOpenIndex] = useState(-1);
  const handleItemOpen = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        <div
          name="resources"
          className="app__resources-container app__motion-list"
        >
          {resources.map((resource, index) => (
            <Item
              key_index={index}
              resource={resource}
              isOpen={index === openIndex}
              onOpen={handleItemOpen}
            />
          ))}
        </div>
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item(props) {
  const toggleOpen = () => props.onOpen(props.key_index);
  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__resources-item app__flex"
      >
        <div className="app__flex" style={{ backgroundColor: "white" }}>
          <img src={props.resource.icon} />
        </div>
        <p className="p-text">{props.resource.name}</p>
      </motion.div>
      <AnimatePresence>
        {props.isOpen && (
          <Content key={props.key_index} resource={props.resource} />
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function Content(props) {
  //   const { description } = props.resource.description;
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>{props.resource.description}</p>
    </motion.div>
  );
}

export default Resources;
