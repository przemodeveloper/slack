import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcCW1VN_6ztR5ooGsagNqTgc4FA8bSuuY",
  authDomain: "slack-e2df1.firebaseapp.com",
  projectId: "slack-e2df1",
  storageBucket: "slack-e2df1.appspot.com",
  messagingSenderId: "1030226424983",
  appId: "1:1030226424983:web:94758b36109a29e745e5d2",
  measurementId: "G-PG7NN95DJW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export { db };

getAnalytics(app);
