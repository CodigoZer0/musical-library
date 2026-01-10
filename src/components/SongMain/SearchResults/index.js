import Song from "../Song";
import { useState, useEffect } from "react";
import { SearchSongsContainer, SearchSongsTitle, SearchSongsTopic } from "./styles";

const SearchResults = ({ songs, savedSongs = [], onToggleSaved }) => {
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        // Cargar búsquedas recientes desde localStorage
        const loadRecentSearches = () => {
            const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
            setRecentSearches(recent);
        };

        loadRecentSearches();

        // Escuchar cambios en localStorage desde otras ventanas
        const handleStorageChange = (e) => {
            if (e.key === 'recentSearches') {
                loadRecentSearches();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // También recargar cuando el componente vuelva a enfocarse
    useEffect(() => {
        const handleFocus = () => {
            const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
            setRecentSearches(recent);
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    // Combinar búsquedas recientes con canciones pasadas
    const displaySongs = recentSearches.length > 0 ? recentSearches : songs;

    const handleAddSong = (song) => {
        console.log('SearchResults: handleAddSong llamado con:', song);
        // Normalizar el objeto song para asegurar que tiene todas las propiedades necesarias
        const normalizedSong = {
            key: song.key || song.idTrack,
            idTrack: song.idTrack || song.key,
            image: song.image,
            title: song.title,
            artist: song.artist,
            album: song.album,
            duration: song.duration,
            added: true
        };
        console.log('SearchResults: Canción normalizada:', normalizedSong);
        console.log('SearchResults: Canciones guardadas antes:', savedSongs);
        onToggleSaved(normalizedSong);
    };

    return(
        <>
           <SearchSongsTitle>Tus busquedas recientes</SearchSongsTitle>
          <SearchSongsTopic>
            <p>Cancion</p>
            <p>Artista</p>
            <p>Album</p>
            <p>Duracion</p>
          </SearchSongsTopic>
          <SearchSongsContainer>
             {displaySongs && displaySongs.length > 0 ? (
                displaySongs.map(song => {
                    const added = savedSongs.some(s => (s.key === song.key || s.key === song.idTrack) || (s.idTrack === song.idTrack || s.idTrack === song.key));
                    return (
                        <Song
                            key={song.key || song.idTrack}
                            image={song.image || ''}
                            title={song.title || 'Sin título'}
                            artist={song.artist || 'Artista desconocido'}
                            album={song.album || 'Álbum desconocido'}
                            duration={song.duration || '0:00'}
                            added={added}
                            onToggleSaved={() => handleAddSong(song)}
                        />
                    );
                })
             ) : (
                <p className="no_songs">No hay búsquedas recientes</p>
             )}
          </SearchSongsContainer>
        </>
    )
}
export default SearchResults;