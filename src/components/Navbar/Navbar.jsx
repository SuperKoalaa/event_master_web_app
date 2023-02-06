import React, { useState } from "react";
import { CgMenuOreos, CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

var items = ["home", "about", "contact"];
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      {/* Laptop Screen  */}
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#$(item)`}>{item}</a>
          </li>
        ))}
      </ul>
      {/* Mobile Screen */}
      <div className="app__navbar-menu">
        <CgMenuOreos onClick={() => setToggle(true)} />
        {toggle === true && (
          <motion.div
            whileInViwe={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <CgCloseO onClick={() => setToggle(false)} />
            <ul>
              {items.map((item) => (
                <li key={{ item }}>
                  <a href={`#$(item)`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
