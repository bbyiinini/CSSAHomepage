import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import QRcode from '../../assets/QRcode.jpg'

const useStyles = makeStyles(theme => ({
	root: {
    flexGrow: 1,
  },
  center:{
    margin: '0 auto',
  },
}));

const Footer = (props) => {

	const classes = useStyles();

	return(
		<FooterWrapper>
			<h1>UCSD CSSA</h1>
			<p>
				CSSA是Chinese Students and Scholars Association的缩写，意为中国学生学者联合会，是海外留学生自发成立的学生组织。以人为本，团结和服务中国学生学者。丰富中国学生学者社交、学术、职业的体验。促进中美文化交流。
			</p>
			<Grid container className={classes.root}>
				<Grid item xs>
					<img src={QRcode} className={classes.center}></img>
				</Grid>
				<Grid item xs>
					<img src={QRcode} className={classes.center}></img>
				</Grid>
			</Grid>
		</FooterWrapper>
	)
}

export default Footer

const FooterWrapper = styled.div`
	background-color: rgb(30, 30, 30);
	position: relative;
	width: 100%;
	background-position: 50% 50%;
	background-size: cover;
	padding: 5.4vw 14.4vw;

	& h1 {
		color: #ffffff;
		font-size: 30px;
		line-height: 1.4;
    padding-bottom: 15px;
    font-weight: normal;
	}

	& p{
		color: #888888;
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 15px;
    font-weight: 300;
	}
`;