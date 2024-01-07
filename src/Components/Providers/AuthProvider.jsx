import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../config/firebaseConfig";


export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
    const [user,serUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    const createUser = (email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;