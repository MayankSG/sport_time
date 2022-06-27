import { POST_REMINDER } from "../constants";
const InitialState = {
	data: {},

}
const reminder = (state = InitialState, action) => {
	switch (action.type) {
		case POST_REMINDER:
			return { ...state, data: action.payload }
		default:
			return state
	}
}

export default reminder;