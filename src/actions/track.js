import * as actionTypes from '../constants/actionTypes';

export const setTracks = (tracks) => ({
	type: actionTypes.TRACKS_SET,
	tracks
});