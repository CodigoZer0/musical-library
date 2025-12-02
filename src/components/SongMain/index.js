import React, { useState, useEffect } from "react";
import MusicLibrary from "./MusicLibrary";
import SearchResults from "./SearchResults";
import { SongsMainContainer } from "./styles";

const SongMain = ({ showLibrary = true, showSearchResults = true, onToggleSaved }) => {
  const [savedSongs, setSavedSongs] = useState([]);

  // Cargar canciones guardadas al montar y cuando vuelva a esta ruta
  useEffect(() => {
    const loadSavedSongs = () => {
      const stored = JSON.parse(localStorage.getItem('userSavedSongs') || '[]');
      setSavedSongs(stored);
    };

    loadSavedSongs();

    // Escuchar cambios en localStorage desde otras ventanas/tabs
    const handleStorageChange = (e) => {
      if (e.key === 'userSavedSongs') {
        loadSavedSongs();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // También recargar cuando el componente vuelva a enfocarse
  useEffect(() => {
    const handleFocus = () => {
      const stored = JSON.parse(localStorage.getItem('userSavedSongs') || '[]');
      setSavedSongs(stored);
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  // Canción vacía para SearchResults si no hay datos estáticos
  const songs = [];

  // Guardar cuando cambien las canciones
  const handleToggleSaved = (song) => {
    setSavedSongs(prev => {
      const exists = prev.some(s => s.key === song.key || s.idTrack === song.idTrack);
      const updated = exists 
        ? prev.filter(s => s.key !== song.key && s.idTrack !== song.idTrack)
        : [...prev, song];
      
      localStorage.setItem('userSavedSongs', JSON.stringify(updated));
      return updated;
    });
    
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