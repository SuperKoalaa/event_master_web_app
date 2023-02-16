import "./App.scss";
import React, { useRef } from "react";
import {
  About,
  Features,
  Footer,
  Header,
  Resources,
  Test,
  Contact,
} from "./container";
import { Navbar } from "./components";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="app">
      <motion.div
        className="app__progress-bar"
        style={{ scaleX: scrollYProgress, zIndex: 100 }}
      />
      {/* <motion.div className="text-container" ref={textRef}>
        <p>Event Master</p>
      </motion.div> */}

      <Navbar />

      <Header />
      {/* <Test /> */}
      <About />
      <Features />
      <Resources />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
