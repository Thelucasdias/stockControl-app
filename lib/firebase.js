import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
    } = process.env;


const firebaseconfig = {
    apiKey : FIREBASE_API_KEY,
    authDomain : FIREBASE_AUTH_DOMAIN,
    databaseURL : FIREBASE_DATABASE_URL,
    projectID : FIREBASE_PROJECT_ID,
    storageBucket : FIREBASE_STORAGE_BUCKET,
    messagingSenderID : FIREBASE_MESSAGING_SENDER_ID,
    appID : FIREBASE_APP_ID,
    measurementID : FIREBASE_MEASUREMENT_ID,

}

let app;

const initializeFirebaseApp = () => {
    app = initializeApp(firebaseconfig);
    return app;
}

const getFirebaseApp = () => app;