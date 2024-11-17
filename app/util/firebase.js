// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

// Load Environment variable
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FireBase_API_Key,
  authDomain: process.env.FireBase_Auth_Domain,
  projectId: process.env.Project_Id,
  storageBucket: process.env.Storage_Bucket,
  messagingSenderId: process.env.Messaging_Sender_Id,
  appId: process.env.App_Id,
  measurementId: process.env.Measurement_Id
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
