import { PLAY_TRACK, SET_CURRENT_TRACK } from './types';

// Play the current track. If 'track' parameter is supplied, set the new current track and play it.
export const playTrack = (track) => {
    return dispatch => {
        dispatch({
            type: PLAY_TRACK,
            payload: true
        });
        if (track) {
            dispatch({
                type: SET_CURRENT_TRACK,
                payload: track
            });
        }
    }
};

// Pause the current track.
export const pauseTrack = () => ({
    type: PLAY_TRACK,
    payload: false
});