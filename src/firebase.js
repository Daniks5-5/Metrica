import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPPD7-f2NaZWrY_lol3FoAoZ6_4r2w_KE",
  authDomain: "metrica-67ec1.firebaseapp.com",
  projectId: "metrica-67ec1",
  storageBucket: "metrica-67ec1.appspot.com",
  messagingSenderId: "840855930067",
  appId: "1:840855930067:web:1254e40f038ea97aad4026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



    const addInfo = async (e) => {
        e.preventDefault();  

        try {
            const docRef = await addDoc(collection(db, "Name"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }