import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import "./offer.scss"
const aboutMeItems = [
    {
        imgUrl: "/pencil.png",
        title: "Skills",
        content:
            "I specialize in both front-end and back-end development, crafting seamless user experiences. My skills include UI/UX design, responsive web design, and more.",
    },
    {
        imgUrl: "/quality.png",
        title: "Experience",
        content:
            "With a rich background spanning over 4 years, I've successfully contributed to a diverse range of projects. From small business websites to large-scale applications, my experience ensures a holistic approach to web development.",
    },
    {
        imgUrl: "/passionate.png",
        title: "Passion",
        content:
            "I am driven by a deep passion for creating visually appealing and intuitive user interfaces. I firmly believe in the transformative power of good design to elevate and enhance user experiences.",
    },
    {
        imgUrl: "/tech-service.png",
        title: "Tech Stack",
        content:
            "My proficiency extends across a robust tech stack, including React, MongoDB, Node.js, Express.js, Nest.js, Vue, and PostgreSQL. I actively stay abreast of the latest industry trends and cutting-edge technologies.",

    },
    {
        imgUrl: "/collaboration.png",
        title: "Collaboration",
        content:
            "Collaboration is at the heart of my approach. I highly value effective communication and teamwork to bring ideas to life. Let's work together to achieve your goals!",
    },
];

const OfferSection = () => {
    const controls = useAnimation();
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }, [controls]);

    return (
        <div className="container">
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
            >
                What I Can Offer You
            </motion.h1>

            <div className="cards">
                {aboutMeItems.map((aboutMeItem, index) => (
                    <motion.div
                        key={index}
                        className="card "
                        whileHover={{ background: 'lightgray', color: 'black' }}
                    >
                        <img src={aboutMeItem.imgUrl} alt={aboutMeItem.title} />
                        <h2 >{aboutMeItem.title}</h2>
                        <p >{aboutMeItem.content}</p>
                    </motion.div>
                ))}
            </div>
            <div className="custom-divider">
                <div className="divider-line"></div>
                <div className="divider-label">something More</div>
                <div className="divider-line"></div>
            </div>
            <p className="text-lg-paragraph ">
                Whether you're looking to build a new web application,
                <br />
                redesign an existing site, or enhance your brand's online presence,
                <br />
                I'm here to help. Let's create something amazing together!
            </p>
        </div>


    )

}

export default OfferSection