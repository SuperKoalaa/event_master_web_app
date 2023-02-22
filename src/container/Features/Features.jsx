import React from "react";
import "./Features.scss";
import { MdEventNote, MdStorefront } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BsChatText, BsPeople, BsCashCoin } from "react-icons/bs";
import { motion } from "framer-motion";

const features = [
  {
    feature_icon: MdEventNote,
    descripton:
      "Event Creation and Management: Create and manage your events with ease, from start to finish. Our intuitive interface makes it simple to add details, manage guest lists, and keep track of tasks and deadlines",
  },
  {
    feature_icon: FaTasks,
    descripton:
      "Task Management: Keep track of tasks and deadlines with our powerful task management tools. Assign tasks to team members, set due dates, and track progress in real-time, all from one central location.",
  },
  {
    feature_icon: BsChatText,
    descripton:
      "Communication Tools: Keep your team and guests in the loop with our communication tools. Send updates, reminders, and messages,  all from within the app, to ensure that everyone is on the same page",
  },
  {
    feature_icon: BsPeople,
    descripton:
      "Guest Management: Manage your guests with ease, from sending invitations to tracking RSVPs and guest details. Our guest  management tools will ensure that you have all the information you need to make your event a success.",
  },
  {
    feature_icon: BsCashCoin,
    descripton:
      "Budget Tracking: Stay on top of your event budget with our budget tracking tools. Track expenses, manage invoices, and ensure that you stay within your budget, every step of the way.",
  },
  {
    feature_icon: MdStorefront,
    descripton:
      "Vendor Management: Manage your vendors with ease, from finding the right vendors for your event to negotiating contracts and managing payments. Our vendor management tools will make sure that everything runs smoothly, from start to finish.",
  },
];

function Features() {
  return (
    <>
      <div name="features" className="app__features">
        {features.slice(0, 6).map((feature, index) => (
          <motion.div
            className="app__features-card app_flex"
            whileInView={{ opacity: [0, 1] }}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            key={index}
          >
            <motion.div
              className="app__features-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <feature.feature_icon className="app__features-icons" />
            </motion.div>
            <p>{feature.descripton}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Features;
