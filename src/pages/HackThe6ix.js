import Navbar from "../components/Navbar";
import HeaderGroupie from "../images/HeaderGroupie.png";
import BackButton from "../images/BackButton.png";
import AnnouncementBlock from "../images/AnnouncementBlock.png";
import MatchedGroupiesBlock from "../images/MatchedGroupiesBlock.png";
import FindGroupieBut from "../images/FindGroupieBut.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom" 

export default function Hackpage() {

    const navigate = useNavigate();

    function handleBack() {
        navigate('/homepage');
    }

    function handleSwipey() {
        navigate('/matchfinder');
    }

    return (
        <>
            <Navbar />
            <img src={BackButton} alt="" className="back-button" onClick={handleBack}/>
            <div className="hack-content">
                <img src={HeaderGroupie} alt="Header" className="Groupie-Header" />
            </div>
            <div className="hack-blocks">
                <img src={AnnouncementBlock} alt="" />
                <div className="second-column-groupie">
                    <motion.img src={FindGroupieBut} alt="" onClick={handleSwipey} className="find-g-but" whileHover={{ scale: 1.025 }}/>
                    <img src={MatchedGroupiesBlock} alt="" />
                </div>
            </div>
        </>
    )
}