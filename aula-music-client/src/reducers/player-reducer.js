import {
    PLAY_TRACK, SET_CURRENT_TRACK
} from '../actions/types.js'

export default (state = {currentTrack: null, isPlaying: false}, action) => {
    switch (action.type) {
        case SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.payload,
                shouldRewind: true
            };
        case PLAY_TRACK:
            return {
                ...state,
                isPlaying: action.payload,
                shouldRewind: false
            };
        default:
            return state;
    }
}