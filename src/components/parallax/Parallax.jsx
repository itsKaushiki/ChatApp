import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
      <motion.div>
  {type === "services" ? (
    <div>
      <motion.h1 className="get-to-know-me">Get to Know Me</motion.h1>
      <motion.p className="bigger-font">
        Hi, I'm  <span style={{ color: "blue", fontWeight: "bold" }}>Kaushiki Bhattacharyya</span>, a dedicated B.Tech student at NIT Jamshedpur. With a knack for problem-solving showcased in my HackerRank success, I bring a diverse skill set spanning C++, C, and web development technologies like HTML, CSS, JavaScript, and React.js.
      </motion.p>
    </div>
  ) : (
    <h1>Here are my Works and Projects!</h1>
  )}
</motion.div>

      </motion.h1>
      <motion.div
       
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
