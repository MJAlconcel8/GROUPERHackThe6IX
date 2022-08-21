
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import plusButton from "../images/addButton.png";
import Event from "../components/Event"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import Computer from "../images/Ellipse2.png"
import Gaming from "../images/Ellipse6.png"
import Business from "../images/Ellipse4.png"
import Teamwork from "../images/Ellipse5.png"
import { useState } from "react";

export default function Homepage() {

    const { logOut, user } = UserAuth();
    const [ displayClass, setDisplayClass ] = useState(false);
    const navigate = useNavigate();

    function createNewClass() {
        setDisplayClass(prevState => !prevState);
    }

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    function handleAddNewEventClick() {
        navigate('/createevent')
    }

    return (
        <>
            <Navbar activate={createNewClass}/>
            <div className="homepage-content">
                <div className="home-top-row">
                    <h1 className="enjoy">Enjoy Your Social Interactions With Grouper!</h1>
                    <motion.div className="add-event" whileHover={{ scale: 1.1 }} onClick={handleAddNewEventClick}>
                        <img src={plusButton} alt="addButton" />
                        <p className="add-event-text">Add an event</p>
                    </motion.div>
                </div>
                <div className="events">
                    <Event 
                        eventtitle="Hack The 6ix"
                        members="880"
                        description="Come join this fantastic 36 hour long event to test or acquire a new programming skill or framework in a motivating and focused setting."
                        logo={Computer}
                        color="#FF8888"
                    />
                    <Event 
                        eventtitle="Gamy"
                        members=" 500"
                        description="Join Gamy, a gaming tournament that promotes the culture of gaming into more of a socially acceptable form of recreation and entertainment."
                        logo={Gaming}
                        color="#FF9B54"
                    />
                    <Event 
                        eventtitle="Finance Group Project"
                        members=" 600"
                        description="Today’s industry is moving towards exciting changes. The goal of the project is to find intuitive ways to help others become financially literate and understand society."
                        logo={Business}
                        color="#CE2457"
                    />
                    {displayClass && <Event 
                        eventtitle="Team On 3"
                        members=" 400"
                        description="Team on 3 is a program that was invented to widen the capacity amongst individuals into developing and honing skills to make them leaders in this world."
                        logo={Teamwork}
                        color="#720026"
                    />}
                </div>
            </div>
        </>

    )
}