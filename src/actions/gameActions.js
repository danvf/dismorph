export const gotoMenu = () => {
    return {
        type: "menu",
    };
};

export const gotoTransition = () => {
    return {
        type: "transition",
    };
};

export const gotoLevel = () => {
    return {
        type: "level",
    };
};

export const gotoLevelWin = (song, artist) => {
    return {
        type: "levelwin",
        payload: { song, artist },
    };
};

export const gotoGameOver = () => {
    return {
        type: "gameover",
    };
};

export const gotoGameWin = () => {
    return {
        type: "gamewin",
    };
};
