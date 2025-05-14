import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "sophielogin-e58ad.firebaseapp.com",
  projectId: "sophielogin-e58ad",
  appId: "AIzaSyDhoAQ2GZZ7aYSeraHFXePWEJipZe2eePQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
