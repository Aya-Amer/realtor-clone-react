import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
 import { useNavigate } from 'react-router';
import { db } from '../firebase';
export default function OAuth() {
     const navigate = useNavigate();
   async function submitWithGoogle() {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
           const result = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // console.log(token)
            const user = result.user;
           
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()){
                await setDoc(docRef, {
                    name:user.displayName,
                    email:user.email,
                    timeStamp:serverTimestamp()
                })
            }
             navigate("/");
        } catch (error) {
            toast.error("Couldn't authorize with Google");
            console.log(error);
        }
    }
  return (
    <div>
      <button onClick={submitWithGoogle} type="button" className='w-full text-center bg-red-500 rounded flex 
        items-center justify-center py-3 mt-5 text-sm font-medium
      text-white uppercase'><FcGoogle className='bg-white rounded-lg mr-2 text-lg'/>
        continue with google</button>
    </div>
  )
}
