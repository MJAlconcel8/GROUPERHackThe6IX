import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Event(props) {

    const navigate = useNavigate();

    

    function handleClick() {
        console.log("CLICK!");
    }

    return (

        <motion.div className="event-card" onClick={handleClick} whileHover={{ scale: 1.1 }}>

            <div className="card-top">
                <div className="card-titles">
                    <h3 className="event-title">{props.eventtitle}</h3>
                    <h4 className="event-members">{props.members} members</h4>
                </div>
                <div className="event-logo" style={{ backgroundImage: `url("https://via.placeholder.com/500")` }} ></div>
            </div>
            <div className="event-decription">{props.description}</div>
        </motion.div >

    )

}