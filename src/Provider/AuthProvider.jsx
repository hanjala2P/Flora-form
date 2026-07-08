import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    // forget password
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
   const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
};


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
        emailPasswordSignUp,
        resetPassword,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;