import React, { useState, useEffect } from 'react';
import NavBar from "./components/navbar/NavBar";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Levels from "./components/levels/Levels";
import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import SignIn from "./components/navbar/SignIn";
import SignUp from "./components/navbar/SignUp";
import Loader from "react-loader-spinner";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    firebase.auth().onAuthStateChanged(async (user) => {
      if(isMounted) {
        if(user) {
          const db = firebase.firestore();
          const userRef = await db.collection("users").doc(user.uid).get();
          const userData = userRef.data();
          dispatch({ type: "USER_UPDATED", payload: userData });
        }
        else {
          dispatch({ type: "USER_UPDATED", payload: null });
        }
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  });

  if(loading) {
    return (
      <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}}>
        <Loader
          type="TailSpin"
          color="#1c83e7"
          height={100}
          width={100}
        />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/levels" component={Levels} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
