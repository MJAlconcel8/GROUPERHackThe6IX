
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import plusButton from "../images/addButton.png";
import Event from "../components/Event"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

export default function Homepage() {

    const { logOut, user } = UserAuth();
    const navigate = useNavigate();


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
            <Navbar />
            <div className="homepage-content">
                <div className="home-top-row">
                    <h1 onClick={handleSignOut} className="enjoy">Enjoy Your Social Interactions With Grouper!</h1>
                    <motion.div className="add-event" whileHover={{ scale: 1.1 }} onClick={handleAddNewEventClick}>
                        <img src={plusButton} alt="addButton" />
                        <p className="add-event-text">Add an event</p>
                    </motion.div>
                </div>
                <div className="events">
                    <Event />
                </div>
            </div>
        </>

    )
}