import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: "YOUR_WEB_CLIENT_ID",
});

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      provider: "email",
      createdAt: new Date(),
    });

    console.log("User saved to Firestore");
  } catch (error: any) {
    console.log(error.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in");
  } catch (error: any) {
    console.log(error.message);
  }
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    const credential = GoogleAuthProvider.credential(
      userInfo.idToken
    );

    const userCredential = await signInWithCredential(auth, credential);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      provider: "google",
      createdAt: new Date(),
    });

    console.log("Google user saved");
  } catch (error: any) {
    console.log(error.message);
  }
};
