import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import tech from '../../assets/tech.png'
import extern from '../../assets/extern.png'
import pub from '../../assets/pub.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  row:{
    margin: '10em 15% 10em 15%'
  },
  button:{
    left: '50%',
    transform: 'translateX(-50%)'
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
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  function FirstRow() {
    return (
      <>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Technology" src={tech} className={classes.large}/>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Extern" src={extern} className={classes.large}/>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Publicize" src={pub} className={classes.large} />
          </Button>
        </Grid>
      </>
    );
  }

  function SecondRow() {
    return (
      <>
        <Grid item xs>
        {/** TODO: add href for department pages */}
          <Button href="" className={classes.button}>
            <Avatar alt="Technology" src={tech} className={classes.large}/>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Extern" src={extern} className={classes.large}/>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Publicize" src={pub} className={classes.large} />
          </Button>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12} spacing={10} className={classes.row}>
          <FirstRow />
        </Grid>
        <Grid container item xs={12} spacing={10} className={classes.row}>
          <SecondRow />
        </Grid>
      </Grid>
    </div>
  );
}