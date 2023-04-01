// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3F_7ok_XMsGe6cf7SfVe2BedTe0PRrYM",
  authDomain: "realtor-clone-react-541f6.firebaseapp.com",
  projectId: "realtor-clone-react-541f6",
  storageBucket: "realtor-clone-react-541f6.appspot.com",
  messagingSenderId: "933947824242",
  appId: "1:933947824242:web:654bec4833331f1d448aeb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
