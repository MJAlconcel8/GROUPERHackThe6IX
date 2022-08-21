
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DropdownMenu() {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    function handleJoinEvent() {
        prompt("Enter your event code");
        alert("Succesfully Joined Event: Team on 3!");
    }

    return (
        <div className="dropdownMenu">
            <div className="dropdown-item">
                <p className="logout" onClick={handleSignOut}>Log Out</p>
            </div>
            <div className="dropdown-item">
                <p className="settings" onClick={handleJoinEvent} >Join an Event</p>
            </div>
        </div>
    )
}