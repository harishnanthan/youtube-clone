import { combineReducers } from "redux";

import { previewReducer } from "./previewReducer";
import { videosReducer } from "./videoReducer";
import { formReducer } from "./formReducer";

// we need to combine our reducer because redux store only access one store
export const rootReducer = combineReducers({
    preview: previewReducer,
    videos: videosReducer,
    // form: formReducer
})