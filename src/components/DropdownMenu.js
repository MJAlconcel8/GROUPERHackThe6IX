
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

    return (
        <div className="dropdownMenu">
            <div className="dropdown-item">
                <p className="logout" onClick={handleSignOut}>Log Out</p>
            </div>
            <div className="dropdown-item">
                <p className="settings" >Join an Event</p>
            </div>
        </div>
    )
}