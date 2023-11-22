import React from 'react';
import "./skills.scss"
import { FaReact, FaVuejs, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiNestjs } from "react-icons/si";
const skills = [
    { icon: <FaReact size={64} color="#61DAFB" />, name: 'React' },
    { icon: <FaVuejs size={64} color="#41B883" />, name: 'Vue.js' },
    { icon: <FaNodeJs size={64} color="#8CC84B" />, name: 'Node.js' },
    { icon: <FaJsSquare size={64} color="#F0DB4F" />, name: 'JavaScript' },
    { icon: <FaDatabase size={64} color="#336791" />, name: 'Database' },
    { icon: <SiNestjs size={64} color="#D80032" />, name: 'NestJs' },
];


const SkillsSection = () => {
    return (
        <div className='skill-main-container'>
        <div className="skill-container">
            
            <h3 className="title">Skills</h3>
            <h3 >
                I specialize in the following technologies to create robust and efficient web solutions.
            </h3>
            <div className="cards">
                {skills.map((skill, index) => (
                    <div key={index} className="card">
                        <div className="card-body flex flex-col items-center">
                            <figure className="fig">
                                {skill.icon}
                            </figure>
                            <h2 className="text-lg  font-bold" style={{ color: "black" }}>{skill.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default SkillsSection;
