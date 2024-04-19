import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.span>
        <div className="social">
          <a href="https://github.com/itsKaushiki">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/__._kaushiki_.__/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="www.linkedin.com/in/kaushiki-bhattacharyya-63556524a">
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a href="https://leetcode.com/kaushiki_03/">
          <img src="/LeetCode_Logo_1.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
