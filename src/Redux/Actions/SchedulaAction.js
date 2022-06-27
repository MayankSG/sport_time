import { POST_SCHEDULAR } from "../constants"
export const SchedularPost = (data) => {
    return {
        type: POST_SCHEDULAR,
        payload: data
 }
}