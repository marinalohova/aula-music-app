import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/styles'
import {
	playTrack
} from '../../actions/player'

const styles = {
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: 16,
		marginRight: 16,
		width: 200
	}
};

class TrackDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			track: props.location.state.track
		}
	}

	componentWillMount() {
		if (this.props.currentTrack == null || this.props.currentTrack.path !== this.state.track.path) {
			this.props.playTrack(this.state.track)
		}
	}

	render() {
		const { classes } = this.props;

		return (
			<Container maxWidth="sm">
				<form className={classes.container} noValidate autoComplete="off">
					<TextField
						id="standard-name"
						label="Name"
						required
						className={classes.textField}
						value={this.state.track.name}
						margin="normal"
					/>
					<TextField
						id="standard-artist"
						label="Artist"
						required
						value={this.state.track.artist}
						className={classes.textField}
						margin="normal"
					/>
					<TextField
						id="standard-album"
						label="Album"
						value={this.state.track.album}
						className={classes.textField}
						margin="normal"
					/>
					<TextField
						id="standard-textarea"
						label="Enter Description"
						placeholder="Description"
						multiline
						className={classes.textField}
						margin="normal"
					/>
					<TextField
						id="standard-year"
						label="Year"
						value={this.state.track.year}
						type="year"
						className={classes.textField}
						InputLabelProps={{
          shrink: true
        }}
						margin="normal"
					/>

					<TextField
						id="standard-full-width"
						label="Enter Keywords"
						style={{ margin: 8 }}
						placeholder="Keywords"
						fullWidth
						margin="normal"
					/>
				</form>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentTrack: state.player.currentTrack,
		isPlaying: state.player.isPlaying
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			playTrack: playTrack
		},
		dispatch
	);
}

TrackDetails.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TrackDetails));
