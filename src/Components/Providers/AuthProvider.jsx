import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";


export const AuthContext = createContext()

 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    console.log(user)

    const createUser = (email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setIsLoading(false)
        })
        return () =>{
            return unSubscribe()
        }
    },[])


    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo ={
        createUser,
        userLogin,
        logOut,
        user,
        isLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;