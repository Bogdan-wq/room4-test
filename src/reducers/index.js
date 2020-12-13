import {combineReducers} from "redux";
import popularTracksReducer from "./popularTracksReducer";
import artistReducer from "./artistReducer";
import searchTracksReducer from "./searchTracksReducer";

const rootReducer = combineReducers({
    popularTracks:popularTracksReducer,
    artist:artistReducer,
    searchTracks:searchTracksReducer,
})

export default rootReducer;