import React,{useState,useEffect} from 'react';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';
//images
import mail from '../assets/mail.png';
import insta from '../assets/insta.png';
import git from '../assets/git.png';
import linkedin from '../assets/linkedin.png';
import monitor from '../assets/monitor.png';
//icons img
import css from '../assets/css-3.png';
import mongo from '../assets/database.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import node from '../assets/node-js.png';
import react from '../assets/physics.png';


const Home = () => {
    //use of hooks
    const [currentIndex,setCurrentIndex]= useState(0);
    const texts = [css,mongo,html,js,node,react];
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

    const navigate = useNavigate();
    return (
        <div className='wrapper'>
            <nav className="navbar">
                <button className='btn' onClick={()=>navigate("/")}>Home</button>
                <button className='btn' onClick={()=>navigate("/skills")}>Skills</button>
                <button className='btn' onClick={()=>navigate("/")}>Projects</button>
                <button className='btn' onClick={()=>navigate("/")}>Contact</button>
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
            </div>
            <div className="icons">
                <img src={git} alt='git'/>
                <img src={mail} alt='git'/>
                <img src={linkedin} alt='git'/>
                <img src={insta} alt='git'/>
            </div>
            <div className="extraButton">
                <button className='Rbtn'>Resume</button>
            </div>
            <div className="imgM">
                <img src={texts[currentIndex]} alt='m'/>
            </div>
        </div>
    )
}

export default Home;