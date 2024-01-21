// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCqJT46EKfKJfuWy-xR3CM-aib7lEEOvWA",
	authDomain: "racapp-f3d6c.firebaseapp.com",
	projectId: "racapp-f3d6c",
	storageBucket: "racapp-f3d6c.appspot.com",
	messagingSenderId: "637164010629",
	appId: "1:637164010629:web:2dee608ccfcf9befa57dec",
	measurementId: "G-XTVP4FEBDS"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const profileImgCollectionRefference = collection(db, 'ProfileImg');

export const storage = getStorage(app);

// Authentication Module
export const auth = getAuth(app);
