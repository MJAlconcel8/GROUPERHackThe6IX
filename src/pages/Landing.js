
import LandingCard from "../components/LandingCard.js";
import blob1 from "../images/blob1.png";
import blob2 from "../images/blob2.png"
import arrow from "../images/arrow.svg"
import grouperText from "../images/GROUPER.png"
import { motion } from "framer-motion";
import bunchofpeople from "../images/bunchofpeople.png"
import { UserAuth } from "../context/AuthContext.js";


export default function Landing() {
    
    const { googleSignIn } = UserAuth();
    const contentA = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, aut!", "hi", "ok"];

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
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
                        graphic={bunchofpeople}
                        content={contentA}
                    />
                    <LandingCard
                        graphic={bunchofpeople}
                        content={contentA}
                    />
                    <LandingCard
                        graphic={bunchofpeople}
                        content={contentA}
                    />
                </div>
            </div>
        </>
    )
}
