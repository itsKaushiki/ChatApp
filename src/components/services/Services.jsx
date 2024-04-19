import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Elevating brands and propelling them forward
    <br /> is my passion and expertise.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://images.unsplash.com/photo-1573165407933-1f603352b998?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Welcome</motion.b> to my
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Creative</motion.b> Space!
          </h1>
          <button>Meet KAUSHIKI</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
       
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Project Enthusiast:</h2>
          <p>
          I'm a project enthusiast turning ideas into reality. From the React.js-based "Travelogue","BloodLink" and "Codepen Clone" projects to the functional "Weather App" and " Wedding Planner" I showcase problem-solving and creativity, crafting meaningful applications with HTML, CSS, and JavaScript.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Achievements and Recognition:</h2>
          <p>
          Achievements define me - a top 25 CodeQuest participant, JEE Advanced qualifier (rank 27189), and proud editor of PRAGYAAN. My team's recognition in the Smart India Hackathon 2023 reflects dedication and versatility in technology and problem-solving.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Leadership and Contributions:</h2>
          <p>
          Beyond academia, I lead as a Student Coordinator in Team Alumni Relations at NIT Jamshedpur, contributing to a digital magazine and events. Engaged in GDSC, Web Domain, and Chess Club, I'm a volunteer at National Service Scheme, highlighting my commitment to community and tech growth.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
