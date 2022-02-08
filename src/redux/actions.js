import { SET_DARKMODE } from "../constants/constants";

export function changeMode(payload) {
    return {
        type: SET_DARKMODE,
        payload
    }
}