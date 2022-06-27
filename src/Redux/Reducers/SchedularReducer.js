import { POST_SCHEDULAR } from "../constants";
const InitialState = {
	data: {},

}
const schedular = (state = InitialState, action) => {
	switch (action.type) {
		case POST_SCHEDULAR:
			return { ...state, data: action.payload }
		default:
			return state
	}
}

export default schedular;