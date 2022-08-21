import Navbar from "../components/Navbar";
import naomiwilliams from "../images/naomiwilliams.png";
import backArrow from "../images/icon-park-outline_return.png";
import chatBubble from "../images/chat_bubble.png"

export default function MatchChat() {

    return (
        <>
            <Navbar />
            <div className="matcheschat-content">
                <div className="matched-deets-summary">
                    <div className="matched-person">
                        <p className="matched-caption">You matched with</p>
                        <p className="red matched-name">Naomi Williams!</p>
                        <img className="matched-profile-pic" src={naomiwilliams} alt="Naomi Williams Profile Picture" />
                    </div>
                    <div className="more-matches-btn">
                        <p>Match with others</p>
                        <img src={backArrow} alt="back arrow" className="back-arrow" />
                    </div>
                </div>
                <div className="chat-area">
                    <div className="chat-bg">
                        <div className="other-chat-member">
                            <p className="chat-cta">Start chatting with</p>
                            <p className="matched-name-chat">Naomi Williams</p>
                            <div className="matched-person-chat">
                                <img className="profile-pic" src={naomiwilliams} alt="Naomi Williams Profile Picture" />
                                <img className="pending-chat-bubble" src={chatBubble} />
                            </div>
                        </div>
                        <div className="user-chat-box">
                            <input className="mssg-box" type="text" placeholder="Say hello and introduce yourself!" />
                            <div className="submit-message">
                                <p>Send</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}