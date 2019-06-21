import React from 'react'
import { Route } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TrackList from './containers/Tracks/List'
import TrackDetails from './containers/Tracks/Details'
import Grid from '@material-ui/core/Grid'
import Player from './components/Player'

function App() {
  return (
    <div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Aula Music
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify="center">
            <Player />
        </Grid>
        <Route path="/" exact component={TrackList} />
        <Route path="/track/:id" component={TrackDetails} />
    </div>
  );
}

export default App;
