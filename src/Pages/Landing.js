
import LandingCard from "../components/LandingCard.js";

export default function Landing() {
    
    
    return (
        <>
            <div className="web-header"></div>
            <div className="logo">
                <img src="" alt="" className="image-logo" />
                <h1 className="text-logo">GROUPER</h1>
            </div>
            <h1 className="main-text">Your DREAM TEAM just one swipe away!</h1>
            <div className="get-start-button">
                <div className="get-started-button-content">
                    <p className="get-start-but-text">GET STARTED</p>
                    <img src="" alt="" className="arrow" />
                </div>
            </div>
            <LandingCard 
                graphic=""
                content=""
            />
            <LandingCard 
                graphic=""
                content=""
            />
            <LandingCard 
                graphic=""
                content=""
            />
        </>
    )
}
