export const selectedSong = (song) => {
    //return the action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
