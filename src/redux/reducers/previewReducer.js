import { TOGGLE, THEME } from "../actions/previewAction";

const initialState = {
    show: true,
    theme: true
}

export const previewReducer = (state = initialState , action) => {
    switch(action.type){
        case TOGGLE:
            return {
                ...state,
                show: !state.show
            }
        case THEME:
            return {
                ...state,
                theme: !state.theme
            }
        default:
            return state
    }
}