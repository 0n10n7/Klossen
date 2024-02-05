import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTFAyT8-cJuhx1tN11gjAJZmLaQTUdvyM",
  authDomain: "klossen-6c224.firebaseapp.com",
  projectId: "klossen-6c224",
  storageBucket: "klossen-6c224.appspot.com",
  messagingSenderId: "268737004423",
  appId: "1:268737004423:web:ed690847003c9995fe8922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);