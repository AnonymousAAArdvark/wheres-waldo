import firebase from "../../firebase";
import "firebase/firestore";
import { Dispatch } from "redux";
const db = firebase.firestore();

export const signIn = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch({ type: "LOGIN_SUCCESS" });
    }
    catch(error) {
      dispatch({ type: "LOGIN_ERROR", payload: error });
    }
  };
};

export const signUp = (email: string, password: string, username: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const querySnapshot = await db.collection("usernames").get();
      querySnapshot.forEach((doc) => {
        if(doc.id === username) {
          throw new Error("Username already taken.");
        }
      });
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      db.collection("usernames").doc(username).set({ uid: user!.uid });
      db.collection("users").doc(user!.uid).set({
        username,
        email,
      });
      dispatch({ type: "LOGIN_SUCCESS" });
    }
    catch(error) {
      dispatch({ type: "SIGNUP_ERROR", payload: error });
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "LOGOUT_ERROR", payload: error });
      });
  };
};