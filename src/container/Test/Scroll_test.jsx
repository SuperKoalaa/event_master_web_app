import { motion } from "framer-motion";
import React from "react";
import "./Scroll_test.scss";
import { MdEventNote, MdStorefront } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BsChatText, BsPeople, BsCashCoin } from "react-icons/bs";

function Scroll_test() {
  return (
    <>
      <div className="app__test-container">
        <div className="app__test">
          <motion.div
            className="app__test-card app_flex"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="app__test-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <MdEventNote className="app__test-icons" />
            </motion.div>
            <p>
              Event Creation and Management: Create and manage your events with
              ease, from start to finish. Our intuitive interface makes it
              simple to add details, manage guest lists, and keep track of tasks
              and deadlines
            </p>
          </motion.div>
          <motion.div
            className="app__test-card app_flex"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="app__test-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <FaTasks className="app__test-icons" />
            </motion.div>
            <p>
              Task Management: Keep track of tasks and deadlines with our
              powerful task management tools. Assign tasks to team members, set
              due dates, and track progress in real-time, all from one central
              location.
            </p>
          </motion.div>
          <motion.div
            className="app__test-card app_flex"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="app__test-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <BsChatText className="app__test-icons" />
            </motion.div>
            <p>
              Communication Tools: Keep your team and guests in the loop with
              our communication tools. Send updates, reminders, and messages,
              all from within the app, to ensure that everyone is on the same
              page
            </p>
          </motion.div>
        </div>
        <div className="app__test">
          <motion.div
            className="app__test-card app_flex"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="app__test-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <BsPeople className="app__test-icons" />
            </motion.div>
            <p>
              Guest Management: Manage your guests with ease, from sending
              invitations to tracking RSVPs and guest details. Our guest
              management tools will ensure that you have all the information you
              need to make your event a success.
            </p>
          </motion.div>
          <motion.div
            className="app__test-card app_flex"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="app__test-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <BsCashCoin className="app__test-icons" />
            </motion.div>
            <p>
              Budget Tracking: Stay on top of your event budget with our budget
              tracking tools. Track expenses, manage invoices, and ensure that
              you stay within your budget, every step of the way.
            </p>
          </motion.div>
          <motion.div
            className="app__test-card app_flex"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="app__test-icon-circle"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <MdStorefront className="app__test-icons" />
            </motion.div>
            <p>
              Vendor Management: Manage your vendors with ease, from finding the
              right vendors for your event to negotiating contracts and managing
              payments. Our vendor management tools will make sure that
              everything runs smoothly, from start to finish.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Scroll_test;
