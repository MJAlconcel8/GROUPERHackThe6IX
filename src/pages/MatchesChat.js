import Navbar from "../components/Navbar";
import naomiwilliams from "../images/naomiwilliams.png";
import backArrow from "../images/icon-park-outline_return.png";
import chatBubble from "../images/chat_bubble.png"
import { motion } from "framer-motion";
import { useState } from "react";

export default function MatchChat() {

    const [ isTyping, setIsTyping ] = useState(false);

    function handleSend() {
        setIsTyping(true)
    }

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
                            {isTyping && <motion.div className="your-message" initial={{opacity: 0}} animate={{opacity: 1}}>Hey whatsup!!!</motion.div>}
                            {isTyping && <motion.div className="matched-person-chat" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}>
                                <img className="profile-pic" src={naomiwilliams} alt="Naomi Williams Profile Picture" />
                                <img className="pending-chat-bubble" src={chatBubble} />
                            </motion.div>} 
                        </div>
                        <div className="user-chat-box">
                            <input className="mssg-box" type="text" placeholder="Say hello and introduce yourself!" />
                            <motion.div className="submit-message" whileHover={{ scale: 1.1 }} onClick={handleSend}>
                                <p>Send</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}