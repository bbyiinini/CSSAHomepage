import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import tech from '../../assets/tech.png'
import extern from '../../assets/extern.png'
import pub from '../../assets/pub.png'
import wentiIcon from '../../assets/wenti.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  row:{
    margin: '10em 15% 10em 15%'
  },
  button:{
    left: '50%',
    display: 'contents',
    height: '100%',
    width:'100%'
  },
  title:{
    display: 'block',
    fontSize: '2.5em',
    paddingTop: '0.3em',
    textAlign: 'center'
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
    display:'block',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  function FirstRow() {
    return (
      <>
        <Grid item xs>
          <Button className={classes.button} href="/jishu" disableRipple>
            <Avatar alt="Jishu" src={tech} className={classes.large}/>
            <p className={classes.title}>技术部</p>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button} disableRipple href="/wailian">
            <Avatar alt="Wailian" src={extern} className={classes.large}/>
            <p className={classes.title}>外联部</p>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button} disableRipple href="/xuanchuan">
            <Avatar alt="Xuanchuan" src={pub} className={classes.large} />
            <p className={classes.title}>宣传部</p>
          </Button>
        </Grid>
      </>
    );
  }

  function SecondRow() {
    return (
      <>
        <Grid item xs>
          <Button className={classes.button} disableRipple href="/wenti" >
              <Avatar alt="Wenti" src={wentiIcon} className={classes.large}/>
              <p className={classes.title}>文体部</p>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button} disableRipple href="/PM">
              <Avatar alt="PM" src={extern} className={classes.large}/>
              <p className={classes.title}>PM</p>
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