import { SELECTED_MUSIC } from "../actions"

const InitialState = {
    selectedMusic: null,
}
const MusicReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SELECTED_MUSIC:
            return {

                ...state, selectedMusic: action.payload,
            };
        default: return state;
    }
}
export default MusicReducer