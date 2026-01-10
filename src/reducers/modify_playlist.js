const initialState = [];

const modifiy_playlist = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG': {
            // Evitar duplicados
            const exists = state.some(
                s => s.key === action.payload.key || 
                     s.idTrack === action.payload.idTrack ||
                     s.id === action.payload.id
            );
            if (exists) {
                console.log('❌ Canción ya existe, no se agrega');
                return state;
            }
            console.log('✅ ADD_SONG: Agregando canción');
            return [...state, action.payload];
        }
        case 'REMOVE_SONG': {
            console.log('✅ REMOVE_SONG: Removiendo canción');
            return state.filter(
                song => song.key !== action.payload && 
                        song.idTrack !== action.payload &&
                        song.id !== action.payload
            );
        }
        case 'LOAD_SAVED_SONGS':
            console.log('✅ LOAD_SAVED_SONGS: Cargando', action.payload ? action.payload.length : 0, 'canciones');
            return action.payload || [];
        default:
            return state;  
    }
}

export default modifiy_playlist;