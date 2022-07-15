import { Backdrop, Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PlayerList from "./PlayerList";
import { fetchData, selectPstbattleData } from "./postBattleSlice";

import "./Postbattle.scss";

const PostBattle = () => {
  const teams = useAppSelector(selectPstbattleData);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="postbattleScreen">
      <h1>Game Over</h1>
      {teams ? (
        <div className="postbattleLists">
          <PlayerList team={teams.winners} title="Winners" />
          <PlayerList team={teams.losers} title="Losers" />
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!teams}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default PostBattle;
