import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MusicLibrary from "./MusicLibrary";
import SearchResults from "./SearchResults";
import { SongsMainContainer } from "./styles";
import { addSong, removeSong, loadSavedSongs } from "../../actions";

const SongMain = ({ showLibrary = true, showSearchResults = true, onToggleSaved, storageKey = 'userSavedSongs' }) => {
  const dispatch = useDispatch();
  const savedSongs = useSelector(state => state.modify_playlist);

  console.log('SongMain render - savedSongs:', savedSongs, 'showLibrary:', showLibrary, 'showSearchResults:', showSearchResults);

  // Canción vacía para SearchResults si no hay datos estáticos
  const songs = [];

  // Agregar o remover canción - verificar contra localStorage
  const handleToggleSaved = (song) => {
    console.log('=== SongMain: handleToggleSaved ===');
    console.log('Canción a guardar/remover:', song);
    
    // Leer directamente de localStorage para tener la verdad
    const storedSongs = JSON.parse(localStorage.getItem(storageKey) || '[]');
    console.log('Canciones en localStorage:', storedSongs);
    
    const exists = storedSongs.some(
      s => s.key === song.key || s.idTrack === song.idTrack || s.id === song.id
    );
    
    console.log('¿Ya existe en localStorage?:', exists);
    
    if (exists) {
      console.log('Despachando REMOVE_SONG');
      dispatch(removeSong(song));
    } else {
      console.log('Despachando ADD_SONG');
      dispatch(addSong(song));
      
      // Después de agregar, actualizar Redux con el nuevo estado
      setTimeout(() => {
        const updated = JSON.parse(localStorage.getItem(storageKey) || '[]');
        console.log('Actualizando Redux con:', updated);
        dispatch(loadSavedSongs(updated));
      }, 100);
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