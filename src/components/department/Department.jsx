import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { AvMicNone } from 'material-ui/svg-icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  row:{
    margin: '10em 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    margin:'0 auto',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs>
            <Avatar alt="Remy Sharp" src="../../logo192.png" className={classes.large} />
        </Grid>
        <Grid item xs>
            <Avatar alt="Remy Sharp" src="../../logo192.png" className={classes.large} />
        </Grid>
        <Grid item xs>
            <Avatar alt="Remy Sharp" src="../../logo192.png" className={classes.large} />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12} spacing={0} className={classes.row}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0} className={classes.row}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0} className={classes.row}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}