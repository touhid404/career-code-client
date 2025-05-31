import React, {  useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthPtovider = ({children}) => {
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const singUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);




    const authInfo = {
        user,
        loading,
        singUp,
        logIn,
        signOutUser
        
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
            
    );
};

export default AuthPtovider;