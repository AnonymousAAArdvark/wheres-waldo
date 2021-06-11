import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types/state-types";
import firebase from "../../firebase";
import "firebase/firestore";
import { NotAuth, SelectLevel, LevelSelect, Loading, TableRow, TableContainer,
         TableCell, LeaderTable, LeaderboardWrapper, Button, Title}
  from "../../styled-components/leaderboard/StyledLeaderboard";
import Loader from "react-loader-spinner";

const Leaderboard = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const [leaderboards, setLeaderboards] = useState<any>();
  const [leaderboardSelected, setLeaderboardSelected] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(authState.user) {
      const db = firebase.firestore();
      const fetchLeaderboards = async () => {
        const leaderboardsPromise = await db.collection("leaderboards").get();
        const leaderboards = leaderboardsPromise.docs.map(function (lead) {
          return {
            id: lead.id,
            data: lead.data()
          };
        });
        const myComparator = (a: any, b: any) => a.time.localeCompare(b.time);
        leaderboards.forEach((leaderboard: any) => {
          leaderboard.data.top_10.sort(myComparator);
        });
        setLeaderboards(leaderboards);
        setLoading(false);
      };
      fetchLeaderboards();
    }
  }, [authState]);

  if(!authState.user) {
    return (
      <NotAuth>Must be logged in to see this page.</NotAuth>
    );
  }

  return (
    <LeaderboardWrapper>
      <LevelSelect>
        <Title>Levels</Title>
        {loading && (
          <Loading>
            <Loader
              type="TailSpin"
              color="#1c83e7"
              height={50}
              width={50}
            />
          </Loading>
        )}
        {leaderboards &&
        leaderboards.map((leaderboard: any) => (
          <Button
            key={leaderboard.id}
            onClick={() => setLeaderboardSelected(leaderboard)}
            selected={leaderboard === leaderboardSelected}
          >
            {leaderboard.id}
          </Button>
        ))}
      </LevelSelect>

      <LeaderTable>
        <Title>Top 10</Title>
        {leaderboardSelected ? (
          <TableContainer>
            <TableRow head>
              <TableCell>User</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Position</TableCell>
            </TableRow>
            {leaderboardSelected.data.top_10.map(
              (row: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{index + 1}</TableCell>
                </TableRow>
              )
            )}
          </TableContainer>
        ) : (
          <SelectLevel>Please select a level</SelectLevel>
        )}
      </LeaderTable>
    </LeaderboardWrapper>
  )
};
export default Leaderboard;