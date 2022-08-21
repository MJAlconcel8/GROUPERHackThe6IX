import { UserAuth } from "../context/AuthContext.js";
import dropdownMenu from "../images/dropdown.png";
import hamburgerMenu from "../images/HamburgerMenu.svg"
import grouperNoArrow from "../images/grouperNav.png"

export default function Navbar() {

    const { user } = UserAuth();

    return (
        <div className="navbar">
            <img src={hamburgerMenu} alt="hamburgerMenu" />
            <img src={grouperNoArrow} alt="logo" className="grouper-logo" />
            <div className="user">
                <img src={user.photoURL} alt="profilepic" className="profile-pic"/>
                <p className="username">{user.displayName}</p>
                <img src={dropdownMenu} alt="dropdownMenu" className="dropdown" />
            </div>
        </div>
    )
}