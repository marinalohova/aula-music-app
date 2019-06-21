import { combineReducers } from "redux";
import tracks from "./tracks-reducer";
import player from "./player-reducer";

export default combineReducers({
    tracks,
    player
});
