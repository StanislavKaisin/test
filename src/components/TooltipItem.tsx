import React from "react";
import {
  withStyles,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const HtmlTooltip = withStyles((theme: Theme) => {
  return {
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 150,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  };
})(Tooltip);

export default function TooltipItem(props: {
  month: string;
  color: string;
  users: { name: string }[];
}) {
  const { month, color, users } = props;
  const usersList = users.map((user) => <p key={user.name}>{user.name}</p>);

  // console.log("users=", users);
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Users were born:</Typography>
            {users.length && usersList}
          </React.Fragment>
        }
      >
        <Button style={{ backgroundColor: color, margin: "0.1rem" }}>
          {month}
        </Button>
      </HtmlTooltip>
    </div>
  );
}
