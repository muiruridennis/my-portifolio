// About.js
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

import "./about.scss";
const aboutSliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};
const About = () => {

    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
        >
            <div className="custom-divider">
                <div className="divider-line"></div>
                <div className="divider-label">About Me</div>
                <div className="divider-line"></div>
            </div>
            <div className="bio">

                <div className=" bio-desc">
                    <h3 >
                        Passion fuels purpose!
                    </h3>
                    <p >

                        Hi there! 👋 I'm Muiruri, a passionate web developer and UI/UX designer.
                        With a love for turning ideas into interactive digital experiences,
                        I specialize in creating user-friendly interfaces and
                        robust web solutions.

                    </p>
                    <p >
                        I don't just design websites. I build high-performing,
                        beautiful websites that are conversion-focused,
                        brand-accurate, and user-friendly.
                    </p>
                    <p >

                        Welcome to my corner of the web, where innovation meets functionality,
                        and where your digital journey begins.
                    </p>
                    <motion.div
                        className="slidingTextContainer"
                        variants={aboutSliderVariants}
                        initial="initial"
                        animate="animate"
                    >
                        Web Developer | Creative Thinker | UX Enthusiast
                    </motion.div>

                </div>
                <div className=" display-image">
                    <Image
                        className="img"
                        src="/aboutdp2.jpg"
                        alt="Picture of the author"
                        width={700}
                        height={650}
                        // sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            </div>


        </motion.div>
    );
};

export default About;
