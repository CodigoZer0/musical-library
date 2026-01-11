import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MusicLibrary from "./MusicLibrary";
import SearchResults from "./SearchResults";
import { SongsMainContainer } from "./styles";
import { addSong, removeSong, loadSavedSongs } from "../../actions";

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

const SongMain = ({ showLibrary = true, showSearchResults = true, onToggleSaved, storageKey = 'userSavedSongs' }) => {
  const dispatch = useDispatch();
  const savedSongs = useSelector(state => state.modify_playlist);

  console.log('SongMain render - savedSongs:', savedSongs, 'showLibrary:', showLibrary, 'showSearchResults:', showSearchResults);

  // Canción vacía para SearchResults si no hay datos estáticos
  const songs = [];

  // Agregar o remover canción - verificar contra Redux (fuente de verdad)
  const handleToggleSaved = (song) => {
    console.log('=== SongMain: handleToggleSaved ===');
    console.log('Canción a guardar/remover:', song);
    console.log('Canciones en Redux:', savedSongs);
    
    // Verificar contra Redux que es la fuente de verdad
    const exists = savedSongs.some(s => areSongEqual(s, song));
    
    console.log('¿Ya existe en Redux?:', exists);
    
    if (exists) {
      console.log('Despachando REMOVE_SONG');
      dispatch(removeSong(song));
    } else {
      console.log('Despachando ADD_SONG');
      dispatch(addSong(song));
    }
    
    if (onToggleSaved) onToggleSaved(song);
  };

  return (
    <SongsMainContainer>
      {showLibrary && (
        <MusicLibrary songs={savedSongs} onToggleSaved={handleToggleSaved} />
      )}

      {showSearchResults && (
        <SearchResults songs={songs} savedSongs={savedSongs} onToggleSaved={handleToggleSaved} />
      )}
    </SongsMainContainer>
  );
}

export default SongMain;