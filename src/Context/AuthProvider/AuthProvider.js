import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

import { useEffect } from 'react';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
export const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //logout
    const logout = () => {
        return signOut(auth);
    }

    ///GOOGLE///
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        setLoading(false);
        const unsubscribe = onAuthStateChanged(auth, (recentUser) => {
            console.log('user inside changed', recentUser);
            setUser(recentUser);

        });
        return () => {
            unsubscribe();
        }
    }, [])



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, providerLogin, createUser, loading, logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


};
export default Authprovider;