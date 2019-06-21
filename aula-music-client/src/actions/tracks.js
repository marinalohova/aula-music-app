import { LOAD_TRACKS, API_ERROR } from './types';

export const loadTracks = (options) => {
    return dispatch => {

        return fetch(`/api/tracks?page=${options.page}&page_size=${options.pageSize}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTracks(json)))
            .catch(error => dispatch(apiError(error)))
    }
};

// Dispatch the paginated API response.
const receiveTracks = (payload) => ({
        type: LOAD_TRACKS,
        payload
    });

// Dispatch the error if API returned 500.
const apiError = (payload) => ({
    type: API_ERROR,
    payload
});