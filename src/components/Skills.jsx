import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/skills.css';
//images
import html from '../assets/html.png';
import react from '../assets/physics.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import node from '../assets/node-js.png';
import redux from '../assets/redux.png';
import mongo from '../assets/mongo.png';
import express from '../assets/express.png';
import git from '../assets/git.png';


const Skills = () => {
    //hooks used
    const navigate = useNavigate();
    const skills = [
        {
            name: "HTML",
            description: "Markup language used to structure content on the web.",
            images: html
        },
        {
            name: "CSS",
            description: "Style sheet language used to style and layout HTML elements.",
            images: css
        },
        {
            name: "JavaScript",
            description: "Programming language used to add interactivity and logic to websites.",
            images: js
        },
        {
            name: "React",
            description: "A JavaScript library for building user interfaces using a component-based architecture.",
            images: react
        },
        {
            name: "Redux",
            description: "A state management tool commonly used with React for predictable state updates.",
            images: redux
        },
        {
            name: "Node.js",
            description: "A JavaScript runtime that allows server-side development using JavaScript.",
            images: node
        },
        {
            name: "Express.js",
            description: "A minimal and flexible Node.js web application framework.",
            images: express
        },
        {
            name: "MongoDB",
            description: "A NoSQL database that stores data as flexible, JSON-like documents.",
            images: mongo
        },
        {
            name: "Mongoose",
            description: "An ODM library that provides schema-based modeling for MongoDB in Node.js.",
            images: mongo
        },
        {
            name: "REST API",
            description: "A set of rules that allows communication between client and server using HTTP requests.",
            images: git
        },
        {
            name: "Git",
            description: "A version control system to track code changes and collaborate with others.",
            images: git
        },
        {
            name: "GitHub",
            description: "A platform for hosting and collaborating on Git repositories.",
            images: git
        },
        {
            name: "Vercel",
            description: "A deployment platform optimized for frontend frameworks and static sites.",
            images: git
        },
        {
            name: "Postman",
            description: "A tool for testing and debugging REST APIs by sending HTTP requests.",
            images: git
        },
        {
            name: "VS Code",
            description: "A lightweight and powerful source code editor for web development.",
            images: git
        },
    ];

    return (
        <div className='wrapper'>
            <nav className="navbar">
                <button className='btn' onClick={()=>navigate("/")}>Home</button>
                <button className='btn' onClick={()=>navigate("/skills")}>Skills</button>
                <button className='btn' onClick={()=>navigate("/")}>Projects</button>
                <button className='btn' onClick={()=>navigate("/")}>Contact</button>
            </nav>
            <div className="skillHead">Skills & Tools</div>
            <div className="cards-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.images} alt={skill.name} className="skill-image" />
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;