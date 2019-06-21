import { LOAD_TRACKS, API_ERROR } from '../actions/types.js'

export default (state = [], { payload, type }) => {
    switch (type) {
        case LOAD_TRACKS:
            return payload;
        case API_ERROR:
            return payload;
        default:
            return state;
    }
}