import React, {Component} from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link as RouterLink } from 'react-router-dom'
import {
    loadTracks,
} from '../../actions/tracks'
import {
    playTrack, pauseTrack,
} from '../../actions/player'
import { VolumeUp, Description } from '@material-ui/icons'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'

class TrackList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            pageSize: 5
        };
        this.handlePlay = this.handlePlay.bind(this);
    }
    
    componentWillMount() {
        this.props.loadTracks({
            page: this.state.page,
            pageSize: this.state.pageSize})
    }
    
    handlePlay(currentTrack) {
        this.props.playTrack(currentTrack);
    }

    handleChangeRowsPerPage(e) {
        this.setState({pageSize: e.target.value});
        this.props.loadTracks({page: this.state.page, pageSize: e.target.value})
    }

    handleChangePage(e, pageNumber) {
        let page = pageNumber + 1;
        this.setState({ page });
        this.props.loadTracks({page, pageSize: this.state.pageSize})
    }

    render() {
        return (
            <Container>
                <Grid item xs={12}>
                    { this.props.tracks && this.props.tracks.paginated ?
                    <Paper>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Artist</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                    <TableCell align="right"/>
                                </TableRow>
                            </TableHead>
                            <TableBody> {
                                    this.props.tracks.paginated.map(track => (
                                    <TableRow key={track.id}>
                                        <TableCell>{this.props.isPlaying && this.props.currentTrack.path === track.path ? <VolumeUp /> : null }</TableCell>
                                        <TableCell>
                                            <Link
                                                component="button"
                                                variant="body2"onClick={this.handlePlay.bind(this, track)}>
                                                {track.name}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{track.artist}</TableCell>
                                        <TableCell align="right">{track.duration}</TableCell>
                                        <TableCell align="right">
                                            <RouterLink to={{ pathname: `/track/${track.name}-${track.artist}`, state: {track}}}>
                                                <Description />
                                            </RouterLink>
                                        </TableCell>
                                    </TableRow> ))
                                }
                            </TableBody>
                        </Table>
                        <TablePagination
                            count={this.props.tracks.totals}
                            page={this.state.page - 1}
                            rowsPerPage={this.state.pageSize}
                            rowsPerPageOptions={[1,5,10]}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
                            onChangePage={this.handleChangePage.bind(this)}
                        />
                    </Paper> : null }
                </Grid>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        tracks: state.tracks,
        currentTrack: state.player.currentTrack,
        isPlaying: state.player.isPlaying,
        apiError: state.apiError
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadTracks: loadTracks,
            playTrack: playTrack,
            pauseTrack: pauseTrack
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
