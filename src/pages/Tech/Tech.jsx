import React from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';

class Tech extends React.Component {
  render() {
    const classes = makeStyles(theme => ({
      root: {
        flex: 1,
        flexDirection: 'row'
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
    const {depData} = this.props.location.state;
    console.log(depData);
    return (
      <div className={classes.root}>
        <Grid container item style={{marginTop: '10%'}} xs={12} spacing={10}>
          <Grid item xs>
            <Avatar alt={1} className={classes.large}></Avatar>
          </Grid>
          <Grid item xs>
            <Avatar alt={2} className={classes.large}></Avatar>
          </Grid>
          <Grid item xs>
            <Avatar alt={3} className={classes.large}></Avatar>
          </Grid>
          <Grid item xs>
    <Avatar alt={3} className={classes.large}>{depData}</Avatar>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Tech