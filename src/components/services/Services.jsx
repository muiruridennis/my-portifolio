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
          Turning Vision Into Reality With Code And Design.

          <br /> With Code And Design
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="/branding.png" alt="" />

          <h2>Strategic Web Branding</h2>
          <p>
            Elevate your online presence with a blend of strategic brand development and top-notch web design.
            From distinctive logos to cohesive web elements,
            I ensure your brand identity shines through every aspect of your website.
            Transform your digital space into a captivating and authentic representation of your brand.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="/mobile.png" alt="" />
          <h2>Web Development</h2>
          <p>
            Leverage my expertise in front-end and back-end development to
            create responsive and dynamic websites tailored to your needs.
            From clean and intuitive user interfaces to robust server-side functionalities,
            I ensure seamless user experiences across devices
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="/designer.png" alt="" />
          <h2>  UI/UX Design</h2>
          <p>

            Transforming ideas into visually stunning and user-friendly interfaces is my forte.
            Through an iterative design process,
            I craft intuitive user experiences with a keen eye for detail.
            From wireframes to high-fidelity prototypes,
            I bring ideas to life with a focus on aesthetics and usability
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="/commerce.png" alt="" />
          <h2>eCommerce Solutions Development</h2>
          <p>
           
            Unlock the potential of online business with customized eCommerce solutions.
             I specialize in creating seamless shopping experiences and implementing secure payment gateways to drive sales.
              Elevate your online store with user-friendly interfaces, responsive design, and robust functionality
               tailored to meet your specific business needs.

          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
