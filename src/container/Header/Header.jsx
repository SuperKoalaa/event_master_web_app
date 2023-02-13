import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { TbClick } from "react-icons/tb";
import "./Header.scss";

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <p>
          "Welcome to Event Master, the comprehensive solution for event
          planning. Whether you're a seasoned event planner or just getting
          started, our app makes it easy to manage all aspects of your events,
          from guest management and task management, to budget tracking and
          vendor management."{" "}
        </p>
        <Button variant="outlined" startIcon={<TbClick />}>
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}

export default Header;
