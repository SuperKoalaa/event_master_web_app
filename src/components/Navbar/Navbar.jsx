import React, { useState } from "react";
import { CgMenuOreos, CgCloseO } from "react-icons/cg";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.scss";

var items = ["home", "about", "features", "resources", "contact"];
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      {/* Laptop Screen  */}
      <ul className="app__navbar-links">
        {items.map((item, index) => (
          <li className="app__flex p-text" key={index}>
            <div />
            <Link to={item} smooth={true} offset={-50} duration={100}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Screen */}
      <div className="app__navbar-menu">
        <CgMenuOreos onClick={() => setToggle(true)} />
        {toggle === true && (
          <motion.div
            // whileInViwe={{ x: [300, 0] }}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <CgCloseO onClick={() => setToggle(false)} />
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item}
                    smooth={true}
                    offset={-50}
                    duration={100}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
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
