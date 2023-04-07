import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export function useAuthStatus() {
    const auth = getAuth();
    const [loggedIn, setLoggedIn ] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        })
    })
  return {loggedIn, checkingStatus}
}
