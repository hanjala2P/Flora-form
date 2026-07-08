import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';

export const AuthContext =createContext();
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);


    // Google SignIn
    const GoogleSignIn =()=>{
        setLoading(true);
       return signInWithPopup(auth,googleProvider);
    }
    // email and password sign in

    const emailPasswordSignIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // email and password sign up
    const emailPasswordSignUp = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Logout
    const logout =()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return  unsubscribe;

    },[])
    const authData = {
        GoogleSignIn,
        logout,
        user,
        loading,
        emailPasswordSignIn,
        emailPasswordSignUp
    }
    return (
       <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;