import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TRAVELOGUE",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Welcome to Travelogue, your passport to seamless travel planning and exploration. Crafted with the dynamic duo of React and CSS, Travelogue is not just a travel planner; it's your personal guide to creating and organizing unforgettable journeys.",
    demoLink: "https://idyllic-pegasus-a185fc.netlify.app/", 
  },
  {
    id: 2,
    title: "CODEPEN CLONE",
    img: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8fDA%3D",
    desc: "A dynamic and feature-rich CodePen clone built with the power of React. Embrace a coding playground that seamlessly combines the simplicity of CodePen with the capabilities of React, offering a platform for developers to experiment, collaborate, and showcase their coding prowess.",
    demoLink: "https://codepen-clone-flax.vercel.app/", 
  },
  {
    id: 3,
    title: "BLOOD LINK",
    img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Welcome to BloodLink, A Blood Donation Site which displays the location of nearest blood banks using Google Maps. It provides services like Chatbot and has a Blood donor predictor to make blood donation easier.It is made using React,CSS and Firebase",
    demoLink: "https://cheerful-gaufre-eafe54.netlify.app/", 
  },
  {
    id: 4,
    title: "WEDDING PLANNER",
    img: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBpbmRpYW58ZW58MHx8MHx8fDA%3D",
    desc: "Welcome to Eternal Moments, where dreams come true and love takes center stage. Our wedding planner site is a harmonious blend of elegance, functionality, and innovation, crafted with love and attention to detail using HTML, CSS, and JavaScript.",
    demoLink: "https://itskaushiki.github.io/WeddingPlanner/", 
  },
  {
    id: 5,
    title: "GDSC NITJSR",
    img: "/Screenshot 2024-04-03 233143.png",
    desc: "Contributed in the development of the GDSC( Google Developers Students Club) of NIT Jamshedpur.",
    demoLink: "https://www.gdscnitjsr.in/", 
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
