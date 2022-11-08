// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import app from '../../firebase/firebase.config';


// export const AuthContext = createContext();
// const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();


// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const login = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }


//     ////google sign in

//     const googleSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log(currentUser);
//             setUser(currentUser);
//         });
//         return () => {
//             return unsubscribe();
//         }

//     }, [])

//     const authInfo = {
//         user, loading, createUser, login, googleSignIn

//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;