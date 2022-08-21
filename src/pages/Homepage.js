import { UserAuth } from "../context/AuthContext"
import Navbar from "../components/Navbar"

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
            <h1 onClick={handleSignOut}>Hello World</h1>
        </>

    )
}