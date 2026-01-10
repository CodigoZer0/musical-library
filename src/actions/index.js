export const addSong = (song) => {
    return {
        type: 'ADD_SONG',
        payload: song
    }
}

export const removeSong = (song) => {
    return {
        type: 'REMOVE_SONG',
        payload: song.key || song.idTrack || song.id
    }
}

export const loadSavedSongs = (songs) => {
    return {
        type: 'LOAD_SAVED_SONGS',
        payload: songs
    }
} 