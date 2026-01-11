const initialState = [];

// Función auxiliar para comparar si dos canciones son iguales
const areSongEqual = (song1, song2) => {
    // Comparar por IDs si existen
    if (song1.key && song2.key && song1.key === song2.key) return true;
    if (song1.idTrack && song2.idTrack && song1.idTrack === song2.idTrack) return true;
    if (song1.id && song2.id && song1.id === song2.id) return true;
    
    // Comparar key con idTrack del otro
    if (song1.key && song2.idTrack && song1.key === song2.idTrack) return true;
    if (song1.idTrack && song2.key && song1.idTrack === song2.key) return true;
    
    // Si no hay IDs válidos, comparar por título + artista
    if (song1.title && song2.title && song1.artist && song2.artist) {
        return song1.title === song2.title && song1.artist === song2.artist;
    }
    
    return false;
};

const modifiy_playlist = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SONG': {
            const payload = action.payload;
            console.log('ADD_SONG: Intentando agregar:', { key: payload.key, idTrack: payload.idTrack, title: payload.title });
            
            // Verificar si ya existe
            const exists = state.some(s => areSongEqual(s, payload));
            
            if (exists) {
                console.log('❌ Canción ya existe, no se agrega');
                return state;
            }
            
            console.log('✅ ADD_SONG: Agregando canción. Estado anterior:', state.length, 'canciones');
            const newState = [...state, payload];
            console.log('✅ ADD_SONG: Nuevo estado:', newState.length, 'canciones');
            console.log('Estado completo:', newState.map(s => ({ key: s.key, idTrack: s.idTrack, title: s.title })));
            return newState;
        }
        
        case 'REMOVE_SONG': {
            console.log('✅ REMOVE_SONG: Removiendo canción. Estado anterior:', state.length, 'canciones');
            const payload = action.payload;
            console.log('REMOVE_SONG: Intentando remover:', { key: payload.key, idTrack: payload.idTrack, title: payload.title });
            
            const newState = state.filter(song => !areSongEqual(song, payload));
            
            console.log('✅ REMOVE_SONG: Nuevo estado:', newState.length, 'canciones');
            return newState;
        }
        
        case 'LOAD_SAVED_SONGS':
            console.log('✅ LOAD_SAVED_SONGS: Cargando', action.payload ? action.payload.length : 0, 'canciones');
            return action.payload || [];
            
        default:
            return state;  
    }
}

export default modifiy_playlist;