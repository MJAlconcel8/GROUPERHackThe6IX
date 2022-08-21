import LandingCard from "../components/LandingCard.js";
import blob1 from "../images/blob1.png";
import blob2 from "../images/blob2.png"
import arrow from "../images/arrow.svg"
import grouperText from "../images/GROUPER.png"
import { motion } from "framer-motion";
import bunchofpeople from "../images/bunchofpeople.png"
import { UserAuth } from "../context/AuthContext.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom" 

export default function Landing() {
    
    const { googleSignIn, user } = UserAuth();
    const contentA = ["The first groupmaking platform featuring swipe technology. Form a group with attendees.", 
                        "Automatically generate and switch between different networking profiles.", 
                        "Swipe through and make your dream groupie. Connect, chat, and expand your network."];
    const contentB = ["Bring people together quicker for large gatherings, like hackathons, networking events, and more.", 
                      "Use the Auto-Assign feature to group anyone who hasn't found a team by the end date.", 
                      "Create an event, share announcements, and invite attendees to start collaborating!"];
    const contentC = ["Create balanced teams to allow students to finish the impossible school projects.", 
                      "Make fair groups based on each individual students' strengths and weaknesses.", 
                      "Assemble your class in a fun way. Connect, chat, and expand your network today."];

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            console.log(user);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate('/homepage');
            console.log(user);
        }
    }, [user]);

    return (
        <div className="wrapper">
            <div className="gradient-container"></div>
            <div className="web-header"></div>
            <img src={blob1} alt="blob" className="blob1" />
            <img src={blob2} alt="blob" className="blob2" />
            <div className="logo">
                <img src="" alt="" className="image-logo" />
                <img src={grouperText} alt="grouper" className="text-logo"></img>
            </div>
            <div className="-landing-content">
                <h1 className="main-text">Your <span className="bold">DREAM TEAM</span> just one swipe away!</h1>
                <motion.div 
                    className="get-start-button"
                    whileHover={{ scale: 1.2 }}
                    onClick={handleGoogleSignIn}
                >
                    <div className="get-started-button-content">
                        <p className="get-start-but-text">GET STARTED</p>
                        <img src={arrow} alt="arrow" className="arrow" />
                    </div>
                </motion.div>
                <div className="cards">
                    <LandingCard
                        content={contentA}
                    />
                    <LandingCard
                        content={contentB}
                    />
                    <LandingCard
                        content={contentC}
                    />
                </div>
            </div>
        </div>
    )
}