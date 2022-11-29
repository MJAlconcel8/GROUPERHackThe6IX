import { UserAuth } from "../context/AuthContext.js";
import dropdownMenu from "../images/dropdown.png";
import hamburgerMenu from "../images/HamburgerMenu.svg"
import grouperNoArrow from "../images/grouperNav.png"
import { motion } from "framer-motion";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu"
import { useNavigate } from "react-router-dom" 

export default function Navbar(props) {

    const navigate = useNavigate();
    const { user } = UserAuth();
    const [displayDropdown, setDisplayDropdown] = useState(false);
    function handleDropdownClick() {
        setDisplayDropdown(prevDisplayDropdown => !prevDisplayDropdown);
    }

    function handleHamburgerClick() {
        navigate('/homepage');
    }

    return (
        <div className="navbar">
            <motion.img src={hamburgerMenu} alt="hamburgerMenu" whileHover={{ rotate: 90 }} onClick={handleHamburgerClick}/>
            <img src={grouperNoArrow} alt="logo" className="grouper-logo" />
            <div className="user">
                <img src={user.photoURL} alt="profilepic" className="profile-pic" onClick={handleDropdownClick} />
                <p className="username" onClick={handleDropdownClick} >{user.displayName}</p>
                <img src={dropdownMenu} alt="dropdownMenu" className="dropdown" onClick={handleDropdownClick} />
            </div>
            <div className="dropdown-menuu">
                {displayDropdown && <DropdownMenu activate={props.activate}/>}
            </div>
        </div>
    )
}