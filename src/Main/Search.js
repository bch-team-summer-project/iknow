import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0 0 50px",
  },
  margin: {
    margin: "auto",
    maxWidth: 700,
  },
}));

export default function InputWithIcon({ search }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        alignItems="flex-end"
        className={classes.margin}
      >
        <Grid item xs={11}>
          <TextField
            id="input-with-icon-grid"
            label="Search"
            onChange={search}
            fullWidth
          />
        </Grid>
        <Grid item>
          <SearchIcon />
        </Grid>
      </Grid>
    </div>
  );
}
