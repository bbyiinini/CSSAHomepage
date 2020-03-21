import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import tech from '../../assets/tech.png'
import extern from '../../assets/extern.png'
import pub from '../../assets/pub.png'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  row:{
    margin: '10em 15% 10em 15%'
  },
  button:{
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'contents',
    height: '100%',
    width:'100%'
  },
  title:{
    display: 'block',
    fontSize: '3em',
    textDecoration: 'none'
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
          <Button className={classes.button}>
            <Avatar alt="Technology" src={tech} className={classes.large}/>
            <p className={classes.title}>A</p>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Extern" src={extern} className={classes.large}/>
            <p className={classes.title}>B</p>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Publicize" src={pub} className={classes.large} />
            <p className={classes.title}>C</p>
          </Button>
        </Grid>
      </>
    );
  }

  function SecondRow() {
    return (
      <>
        <Grid item xs>
          <Button className={classes.button}>
            <Link to={{pathname: '/tech',state: {depData:'Jishu'}}}>
              <Avatar alt="Technology" src={tech} className={classes.large}/>
              <p className={classes.title}>D</p>
            </Link>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Link to={{pathname: '/tech',state: {depData:'Xuanchuan'}}}>
              <Avatar alt="Extern" src={extern} className={classes.large}/>
              <p className={classes.title}>E</p>
            </Link>
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.button}>
            <Avatar alt="Publicize" src={pub} className={classes.large} />
            <p className={classes.title}>F</p>
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