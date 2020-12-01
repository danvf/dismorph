
const defaultState = {
    status: "menu",
    currentLevel: 0,
    song: "",
    artist: "",
};

const gameReducer = (state = defaultState, action) => {
    let newLevel, newState, lastSong, lastArtist;
    switch (action.type) {
        case "menu":
            newState = {...state, status: "menu"};
            return newState;
        case "transition":
            newLevel = state.currentLevel + 1;
            newState = {status: "transition", currentLevel: newLevel};
            return newState;
        case "level":
            newState = {...state, status: "level"};
            return newState;
        case "levelwin":
            newLevel = action.payload.level;
            lastSong = action.payload.song;
            lastArtist = action.payload.artist;
            newState = {status: "levelwin", currentLevel: state.currentLevel, 
                song: lastSong, artist: lastArtist};
            return newState;
        case "gameover":
            newLevel = 0;
            newState = {...state, status: "gameover", currentLevel: newLevel};
            return newState;
        case "gamewin":
            newLevel = 0;
            newState = {...state, status: "gamewin", currentLevel: newLevel};
            return newState;
        default:
            return state;
    }
};

export default gameReducer;
