import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB22b58YrkDS7uBdVfFZDTuONBQ-2zEsBw",
  authDomain: "otp-login-app-c0256.firebaseapp.com",
  projectId: "otp-login-app-c0256",
  storageBucket: "otp-login-app-c0256.appspot.com",
  messagingSenderId: "704723565351",
  appId: "1:704723565351:web:8c3b0bb117de069a480702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
