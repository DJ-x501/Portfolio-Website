import React, { useState, useEffect } from 'react';
import '../styles/home.css';
//images
import mail from '../assets/mail.png';
import insta from '../assets/insta.png';
import git from '../assets/git.png';
import linkedin from '../assets/linkedin.png';
//icons img
import css from '../assets/css-3.png';
import mongo from '../assets/database.png';
import html from '../assets/html.png';
import react from '../assets/physics.png';
import js from '../assets/js.png';
import node from '../assets/node-js.png';
import redux from '../assets/redux.png';
import express from '../assets/express.png';
import api from '../assets/api.png';
import github from '../assets/github.png';
import code from '../assets/code.png';
import portfolio from '../assets/portfolio.png';
import eCommerce from '../assets/e-commerce.png';
import authPage from '../assets/authPage.png';
//components


const Home = () => {
    //use of hooks
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [css, mongo, html, js, node, react];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []);


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
            images: api
        },
        {
            name: "Git",
            description: "A version control system to track code changes and collaborate with others.",
            images: git
        },
        {
            name: "GitHub",
            description: "A platform for hosting and collaborating on Git repositories.",
            images: github
        },
        {
            name: "VS Code",
            description: "A lightweight and powerful source code editor for web development.",
            images: code
        },
    ];
    const projects = [
        {
            name: "E-Commerce Website",
            description: "A full-stack MERN e-commerce app with product listing, cart.",
            image: eCommerce,
            link: "https://e-commerce-ten-livid-88.vercel.app/"
        },
        {
            name: "Portfolio Website",
            description: "Personal portfolio built with React showcasing skills, projects, and contact details.",
            image: portfolio,
            link: "https://portfolio-website-iota-two-13.vercel.app/"
        },
        {
            name:"Auth-App",
            description:"Note: this app is still in progress.......",
            image:authPage,
            link:"not ready yet"
        }
    ];
    return (
        <div className='wrapper'>
            <nav className="navbar">
                <a href='#home'>Home</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
            <div className="textContainer">
                <div className="heading">
                    <div className="leftText">
                        <div className="head">DHANANJAY</div>
                    </div>
                    <div className="rightText">
                        <div className="subHead">KUMAR</div>
                    </div>
                </div>
                <div className="title">&#123; MERN STACK Developer &#125;</div>
                <div className="summary">
                    I am a motivated and detail-oriented Full-Stack Web Developer with strong foundational skills in front-end and back-end technologies. Passionate about building responsive web applications and continuously learning new tools and frameworks. Eager to contribute to real-world projects and grow as a developer in a collaborative team environment.
                </div>
                <div className="extraButton">
                    <button className='Rbtn'>Resume</button>
                </div>
                <div className="imgM">
                    <img src={texts[currentIndex]} alt='m' />
                </div>
            </div>
            <div className="icons">
                <img src={git} alt='git' />
                <img src={mail} alt='git' />
                <img src={linkedin} alt='git' />
                <img src={insta} alt='git' />
            </div>



            {/* skills section */}



            <div className='wrapperSkills' id='skills'>

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



            {/* projects section */}



            <div className="projectsWrapper" id='projects'>
                <div className="projectHead">Projects</div>
                {projects.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <div className="projectImage">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="projectInfo">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="links"><a href={project.link} target='_blank'>Go to Website</a></div>
                        </div>
                    </div>
                ))}
                <div className="soon">More Coming Soon .....</div>
            </div>



            {/* contact section */}


            <div className="footer" id='contact'>
                <div className="footer-left">
                    <h3>Contact Details</h3>
                    <p>Address: Jaipur, Rajasthan, India</p>
                    <p>Mobile: +91 9145807743</p>
                    <p>E-mail: bhargavdhananjaix501@gmail.com</p>

                </div>
                <div className="footer-right">
                    <h3>Mern Stack Developer</h3>
                    <p>I am a motivated and detail-oriented Full-Stack Web Developer with strong foundational skills in front-end and back-end technologies. Passionate about building responsive web applications and continuously learning new tools and frameworks. Eager to contribute to real-world projects and grow as a developer in a collaborative team environment.</p>
                </div>
            </div>

        </div>
    )
}

export default Home;