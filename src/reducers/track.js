import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TRACKS_SET:
			const {tracks} = action;
			return [...state,...tracks];
			break;
		default:
			return state;
			break;
	}
}