import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase/auth";

const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
    }

    return (
        <AuthContext.Provider value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}