import { ILevels } from "../types/level-types";
import firebase from "firebase/app";
import "firebase/firestore";

export const isCharacterFound = async (
  character: string,
  level: ILevels,
  selectedCoords: Array<number>
) => {
  const db = firebase.firestore();
  const docLevel = db.collection("levels").doc(level.name);
  const selectedCoordX = selectedCoords[0];
  const selectedCoordY = selectedCoords[1];
  let isFound: boolean = false;

  try {
    const levelData = await docLevel.get();
    if(levelData.exists) {
      const characterCoords = levelData.data()!.characters[character];
      isFound =
        selectedCoordX >= characterCoords.coords_x[0] &&
        selectedCoordX <= characterCoords.coords_x[1] &&
        selectedCoordY >= characterCoords.coords_y[0] &&
        selectedCoordY <= characterCoords.coords_y[1]
    }
    else {
      throw new Error("Document not found");
    }
  }
  catch (error) {
    console.log("Something went wrong", error);
  }

  return isFound;
};

type LeaderboardTimes = {
  time: string;
  userName: string;
};

export const saveTimeInLeaderboard = async (time: string, level: ILevels) => {
  const db = firebase.firestore();
  const userUid = firebase.auth().currentUser!.uid;
  const docRef = db.collection("users").doc(userUid);

  const doc = await docRef.get();
  try {
    if(doc.exists) {
      const userName = doc.data()!.username;
      const levelRef = db.collection("leaderboards").doc(level.name);
      const topTenPromise = await levelRef.get();
      const topTen = topTenPromise.data()!.top_10;
      const myComparator = (a: LeaderboardTimes, b: LeaderboardTimes) => a.time.localeCompare(b.time);
      const orderedTopTen = topTen.sort(myComparator);
      if(isTopTen(orderedTopTen, time)) {
        if(orderedTopTen.length === 10) {
          levelRef.update({
            top_10: firebase.firestore.FieldValue.arrayRemove(orderedTopTen[orderedTopTen.length - 1])
          })
        }
        levelRef.update({
          top_10: firebase.firestore.FieldValue.arrayUnion({userName, time, timeStamp: new Date()})
        });
      }
    }
    else {
      throw new Error("No such document");
    }
  }
  catch(error) {
    console.log("Error getting document:", error);
  }
};

const isTopTen = (topTen: Array<LeaderboardTimes>, userTime: string) => {
  if(topTen.length < 10) return true;
  return topTen[topTen.length - 1].time.localeCompare(userTime) === 1;
};