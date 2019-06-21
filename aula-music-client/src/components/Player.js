import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import { withStyles } from '@material-ui/styles'
import {
    playTrack, pauseTrack,
} from '../actions/player'

const styles = {
    card: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto',
        minWidth: 200,
        alignItems: 'center',
        textAlign: 'center'
    },
    cover: {
        width: 170
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        paddingBottom: 16
    },
    playIcon: {
        height: 38,
        width: 38
    }
};

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null
        };

        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    componentDidUpdate(prevProps) {
        // Load the song from the beginning
        if ((this.props.currentTrack && this.props.currentTrack !== prevProps.currentTrack)
        || this.props.shouldRewind) {
            if (this.audio) {
                this.audio.pause();
                this.audio = null;
            }
            this.audio = new Audio(this.props.currentTrack.path);
        }
        // Resume / pause playing the current song
        if (this.props.isPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    handlePlay() {
        if (this.audio) {
            this.audio.play();
            this.props.playTrack();
        }
    }

    handlePause() {
        if (this.audio) {
            this.audio.pause();
            this.props.pauseTrack();
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Box m={2}>
                <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {this.props.currentTrack ? this.props.currentTrack.name : "--"}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {this.props.currentTrack ? this.props.currentTrack.artist : "--"}
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <IconButton aria-label="Previous">
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton aria-label="Play/pause">{this.props.isPlaying ?
                                <PauseIcon onClick={this.handlePause} className={classes.playIcon}/> :

                                <PlayArrowIcon onClick={this.handlePlay} className={classes.playIcon}/> }
                            </IconButton>
                            <IconButton aria-label="Next">
                                <SkipNextIcon />
                            </IconButton>
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={this.props.currentTrack ? this.props.currentTrack.cover : './generic-track.jpg'}
                    />
                </Card>
            </Box>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentTrack: state.player.currentTrack,
        shouldRewind: state.player.shouldRewind,
        isPlaying: state.player.isPlaying
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            playTrack: playTrack,
            pauseTrack: pauseTrack
        },
        dispatch
    );
}

Player.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Player));