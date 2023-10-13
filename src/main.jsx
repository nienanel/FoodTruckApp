import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBqMVLsE28fZMxfRJsbxCQ_kfvgp3yd6vI",

  authDomain: "foodtruckapp-cc910.firebaseapp.com",

  projectId: "foodtruckapp-cc910",

  storageBucket: "foodtruckapp-cc910.appspot.com",

  messagingSenderId: "438354046037",

  appId: "1:438354046037:web:8fb25e8f802ea71828b8dc",

  measurementId: "G-7BT98SR2EL"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
