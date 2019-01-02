import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'HelloWold', duration: '4:05' },
        { title: 'HappyNewYear', duration: '4:45' },
        { title: 'Happy', duration: '3:55' },
        { title: 'HappyBD', duration: '2:57' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {

    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload;
        default:
            return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})