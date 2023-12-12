import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'


const InfoBox = ({ text, link, btnText}) => {
    return(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>)
}

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Dario</span><br/>
            A Computer Engineer from Italy.
        </h1>
    ),
    2:(
        <InfoBox 
        text = "Graduated from the Polytechinc of Turin. I'm enjoying my first work experiences."
        link = "/about"
        btnText= "Learn more"
        />
        
    ),
    3:(
        <InfoBox 
        text = "I'm new in the dev world but I will publish here my results. Curious about it?"
        link = "/projects"
        btnText= "Visit my portfolio"
        />
    ),
    4:(
        <InfoBox 
        text = "Are you looking for a dev or a data scientis?"
        link = "/contact"
        btnText= "Let's talk"
        />
    ),
}

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
  
}

export default Homeinfo