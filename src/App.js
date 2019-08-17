import React from "react";
import logo from "./logo.svg";
import { Text } from "react-dom"
import { Button, Paper, makeStyles, Typography, Grid, BottomNavigationAction, BottomNavigation, Box, Container } from "@material-ui/core";
import "./App.css";
import "typeface-roboto";
import PlaceIcon from '@material-ui/icons/Place';
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    // display: "flex",
    // flexDirection: "column",
    // flex: 1,
    // flexGrow: 1,
    // height: "100%",
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(https://placeimg.com/640/480/arch)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    flex: "1 1 100%",
    // height: "80%",
  },
}));

export function HomeScreen() {
  const classes = useStyles();

  return (
    <Box style={{display: "flex", flexDirection: "column", height: "100%"}}>
      <Grid container direction="column" justify="space-around" alignItems="center" style={{height: "100%"}}
        className={classes.mainFeaturedPost}>
        <Grid item style={{flex: 2}}></Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{textTransform: "uppercase"}}>Italy</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" style={{textTransform: "uppercase"}}>Rome</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" style={{textTransform: "uppercase"}}>is a historical powerhouse</Typography>
        </Grid>
        <Grid item style={{flex: 1}}></Grid>
        <Grid item style={{width: "100%"}}>
          <Grid container justify="space-between">
            <Grid item style={{padding: "1rem"}}>
              <Typography variant="caption" style={{textTransform: "uppercase"}}>Local time</Typography>
              <Typography variant="h5">10:23 AM</Typography>
              <Typography variant="caption">12/09/2019</Typography>
            </Grid>
            <Grid item style={{padding: "1rem", textAlign: "right"}}>
              <Typography variant="caption" style={{textTransform: "uppercase"}}>Today</Typography>
              <Typography variant="h5">-2°C</Typography>
              <Typography variant="caption">Scattered clouds</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BottomNavigation showLabels style={{flex: "0 1 6rem"}}>
        <BottomNavigationAction label="Attractions" icon={<PlaceIcon />} />
        <BottomNavigationAction label="Need to know" icon={<WorkIcon />} />
        <BottomNavigationAction label="More" icon={<MenuIcon />} />
      </BottomNavigation>
    </Box>
  );
}

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <HomeScreen/>
    </Container>
  );
}

export default App;
