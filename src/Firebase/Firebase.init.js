import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_apiKey,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
  //   -----------------------------
  apiKey: "AIzaSyAHsWfDWa7ZDSugGDo_0vPJ6nyhXO4HsoM",
  authDomain: "tutor-guru-01.firebaseapp.com",
  projectId: "tutor-guru-01",
  storageBucket: "tutor-guru-01.appspot.com",
  messagingSenderId: "459360069002",
  appId: "1:459360069002:web:925dbc33a9e4dc78cd1473",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
