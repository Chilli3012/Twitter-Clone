// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbIfR4BS1jV-rNF_cJcW7sey8PaJt1iGw",
  authDomain: "twitter-clone-534bf.firebaseapp.com",
  projectId: "twitter-clone-534bf",
  storageBucket: "twitter-clone-534bf.appspot.com",
  messagingSenderId: "294822521604",
  appId: "1:294822521604:web:54c22965c465aff682fe51",
  measurementId: "G-3QXDJQXDQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export default app;
