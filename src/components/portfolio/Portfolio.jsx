import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const projects = [
  {
    title: 'Memories - Social Platform',
    description: 'Memories is a social platform where users can create and share their cherished memories with friends and family. It allows users to upload photos, write stories, and connect with others through their shared experiences.',
    liveDemo: 'https://example.com/memories',
    codeRepository: 'https://github.com/muiruridennis/MernApp',
    image: "/memories.jpg",
  },
  {
    title: 'FortuneForge - Finance Management System',
    description: 'FortuneForge is a finance management system designed to help users efficiently manage their personal finances. It provides tools for budgeting, expense tracking, investment management, and financial goal setting.',
    liveDemo: 'https://example.com/fortuneforge',
    codeRepository: 'https://github.com/yourusername/fortuneforge',
    image: "/financeMgt.jpg",
  },
  {
    title: 'E-Shop - Ecommerce Website',
    description: 'E-Shop is an ecommerce website that offers a wide range of products for online shoppers. Users can browse through various categories, add products to their cart, and make secure online payments.',
    liveDemo: 'https://example.com/eshop',
    codeRepository: 'https://github.com/muiruridennis/salesmaker',
    image: "/ecom.jpg",
  },
];

const Single = ({ project }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={project.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="actions">
              <a href={project.codeRepository}  className="repo-button" target="_blank" rel="noopener noreferrer">View Repo</a>
              <a href={project.liveDemo} className="demo-button" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
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
      {projects.map((project, index) => (
        <Single project={project} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
