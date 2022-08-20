
import LandingCard from "../components/LandingCard.js";
import blob1 from "../images/blob1.png";
import blob2 from "../images/blob2.png"

export default function Landing() {


    return (
        <>
            <div className="gradient-container"></div>
            <div className="web-header"></div>
            <img src={blob1} alt="blob" className="blob1" />
            <img src={blob2} alt="blob" className="blob2" />
            <div className="logo">
                <img src="" alt="" className="image-logo" />
                <h1 className="text-logo">GROUPER</h1>
            </div>
            <div className="-landing-content">
                <h1 className="main-text">Your <span className="bold">DREAM TEAM</span> just one swipe away!</h1>
                <div className="get-start-button">
                    <div className="get-started-button-content">
                        <p className="get-start-but-text">GET STARTED</p>
                        <img src="" alt="" className="arrow" />
                    </div>
                </div>
                <div className="cards">
                    <LandingCard
                        graphic=""
                        content="The first groupmaking platform featuring swipe technology. Simplify group formation for attendees."
                    />
                    <LandingCard
                        graphic=""
                        content=""
                    />
                    <LandingCard
                        graphic=""
                        content=""
                    />
                </div>
            </div>
        </>
    )
}
