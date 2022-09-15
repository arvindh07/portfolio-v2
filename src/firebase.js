import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDFvFlfgBLYKxpTyCRZOOEnwNMGLiVMV54",
    authDomain: "portfolio-v2-bab98.firebaseapp.com",
    projectId: "portfolio-v2-bab98",
    storageBucket: "portfolio-v2-bab98.appspot.com",
    messagingSenderId: "489381822786",
    appId: "1:489381822786:web:6a3a7d36e89f35a6c788db"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;