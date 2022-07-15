import React, { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Player } from "./postBattleSlice";
import { Button, Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  team: Player[];
  title: string;
};

const PlayerList: FC<Props> = ({ team, title }) => {
  return (
    <>
      <List
        className={`listContent ${title}`}
        sx={{
          overflow: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          width: "40vw",
          maxWidth: "100vw",
          bgcolor: "background.paper",
        }}
      >
        <h2>{title}</h2>
        {team.map((el) => (
          <ListItem
            alignItems="flex-start"
            key={el.id}
            secondaryAction={
              <Button size="small" variant="outlined" endIcon={<SendIcon />}>
                Add
              </Button>
            }
          >
            <Tooltip
              title={
                <>
                  <p>Total Kills: {el.totalKills}</p>
                  <p>Deaths: {el.deaths}</p>
                </>
              }
              placement="right-end"
            >
              <ListItemAvatar>
                <Avatar
                  alt={el.name.toUpperCase()}
                  src="/static/images/avatar/1.jpg"
                  sx={{ bgcolor:  title === "Winners"?  "#65151580" : "#1e651580"}}
                />
              </ListItemAvatar>
            </Tooltip>
            <ListItemText
              primary={
                <>
                  {el.name} -{" "}
                  <span
                    style={{ color: el.state === "alive" ? "#94e3f1" : "#f19494" }}
                  >
                    {el.state}
                  </span>
                </>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Score:
                  </Typography>
                  <span>{" " + el.score}</span>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PlayerList;
