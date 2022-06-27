import { POST_REMINDER } from "../constants"
export const ReminderPost = (data) => {
    return {
        type: POST_REMINDER,
        payload: data
    }
}