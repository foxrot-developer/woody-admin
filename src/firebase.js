import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_shhdLREtnUPB7OH4s6XmC-VU9yxKDpM",
    authDomain: "woody-a07fa.firebaseapp.com",
    databaseURL: "https://woody-a07fa-default-rtdb.firebaseio.com",
    projectId: "woody-a07fa",
    storageBucket: "woody-a07fa.appspot.com",
    messagingSenderId: "657461779399",
    appId: "1:657461779399:web:97117cda168834ad3897e2",
    measurementId: "G-XJK25VY41X"
};

const app = initializeApp(config);
export const auth = getAuth(app);