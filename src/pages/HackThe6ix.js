import Navbar from "../components/Navbar";
import HeaderGroupie from "../images/HeaderGroupie.png";
import BackButton from "../images/BackButton.png";
import AnnouncementBlock from "../images/AnnouncementBlock.png";
import MatchedGroupiesBlock from "../images/MatchedGroupiesBlock.png";
import FindGroupieBut from "../images/FindGroupieBut.png";
import { motion } from "framer-motion";

export default function Hackpage() {

    return (
        <>
            <Navbar />
            <img src={BackButton} alt="" className="back-button" />
            <div className="hack-content">
                <img src={HeaderGroupie} alt="Header" className="Groupie-Header" />
            </div>
            <div className="hack-blocks">
                <img src={AnnouncementBlock} alt="" />
                <div className="second-column-groupie">
                    <motion.img src={FindGroupieBut} alt="" className="find-g-but" whileHover={{ scale: 1.025 }}/>
                    <img src={MatchedGroupiesBlock} alt="" />
                </div>
            </div>
        </>
    )
}