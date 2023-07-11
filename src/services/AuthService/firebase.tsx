import { initializeApp } from 'firebase/app';
import {getAuth} from  'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCycsEL8dBgz-QKoZwzEG4K-niR8Nqyxt4",
  authDomain: "react--auth-7d787.firebaseapp.com",
  projectId: "react--auth-7d787",
  storageBucket: "react--auth-7d787.appspot.com",
  messagingSenderId: "1070239465743",
  appId: "1:1070239465743:web:a3abed076c27c88408fe7a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();