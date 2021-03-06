import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchmargin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon({ search }) {
  const classes = useStyles();

  return (
    <div className={classes.searchmargin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Search"
            onChange={search}
          />
        </Grid>
      </Grid>
    </div>
  );
}
