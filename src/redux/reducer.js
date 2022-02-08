import { SET_DARKMODE } from "../constants/constants"

const initialState = {
    darkMode: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DARKMODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }

        default:
            return state;
    }
}


