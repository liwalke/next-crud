import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
// Configuração do app firebase web
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "next-crud-dffed.appspot.com",
  messagingSenderId: "739316014667",
  appId: "1:739316014667:web:7cfe4e75abc19bb8e677ce"
};


// Inicializando firebase
const app = initializeApp( firebaseConfig )
const dataBase = getFirestore(app);
 
export { dataBase }