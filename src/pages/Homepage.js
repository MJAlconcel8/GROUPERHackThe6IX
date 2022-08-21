import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import plusButton from "../images/addButton.png";
import Event from "../components/Event"

export default function Homepage() {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="homepage-content">
                <div className="home-top-row">
                    <h1 onClick={handleSignOut} className="enjoy">Enjoy Your Social Interactions With Grouper!</h1>
                    <div className="add-event">
                        <img src={plusButton} alt="addButton" />
                        <p className="add-event-text">Add an event</p>
                    </div>
                </div>
                <div className="events">
                    <Event />
                </div>
            </div>
        </>

    )
}