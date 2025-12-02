import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { AlbumListError, AlbumListHeader, AlbumListLoading, AlbumListNoSongs, AlbumListSongContainer, AlbumListSongItem, AlbumListSongsDuration, AlbumListSongsHeader, AlbumListSongsList, AlbumListSongsNumber, AlbumListSongsTitle } from './styles';

const AlbumSongsList = ({ album }) => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!album) return;

        const fetchAlbumSongs = async () => {
            setLoading(true);
            setError(null);
            try {
                // Usar el endpoint de búsqueda de álbumes para obtener el ID correcto
                const searchResponse = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(album.strArtist)}&a=${encodeURIComponent(album.strAlbum)}`
                );
                
                if (searchResponse.data.album && searchResponse.data.album.length > 0) {
                    const foundAlbum = searchResponse.data.album[0];
                    
                    // Obtener las canciones usando el idAlbum encontrado
                    const tracksResponse = await axios.get(
                        `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${foundAlbum.idAlbum}`
                    );
                    
                    const tracksData = tracksResponse.data.track || [];
                    setSongs(Array.isArray(tracksData) ? tracksData : []);
                } else {
                    setSongs([]);
                }
            } catch (err) {
                console.error("Error fetching album songs:", err);
                setError(err);
                setSongs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbumSongs();
    }, [album]);

    const handleSongClick = (song) => {
        // Guardar en historial de búsquedas recientes
        const recentSongs = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        const songData = {
            key: song.idTrack,
            idTrack: song.idTrack,
            image: song.strTrackThumb || album.strAlbumThumb,
            title: song.strTrack,
            artist: song.strArtist || album.strArtist,
            album: song.strAlbum || album.strAlbum,
            duration: song.intDuration ? Math.floor(song.intDuration / 1000 / 60) + ':' + 
                     (Math.floor(song.intDuration / 1000) % 60).toString().padStart(2, '0') : '0:00',
            added: false,
            timestamp: new Date().getTime()
        };

        // Evitar duplicados - quitar si ya existe
        const filtered = recentSongs.filter(s => s.idTrack !== song.idTrack);
        
        // Agregar al principio del array (más reciente primero)
        const updated = [songData, ...filtered].slice(0, 10); // Mantener máximo 10 recientes
        localStorage.setItem('recentSearches', JSON.stringify(updated));

        navigate('/song', {
            state: {
                song: {
                    idTrack: song.idTrack,
                    strTrack: song.strTrack,
                    strArtist: song.strArtist || album.strArtist,
                    strAlbum: song.strAlbum || album.strAlbum,
                    intDuration: song.intDuration,
                    strTrackThumb: song.strTrackThumb,
                    strAlbumThumb: album.strAlbumThumb
                }
            }
        });
    };

    if (loading) {
        return <AlbumListLoading><p>Cargando canciones...</p></AlbumListLoading>;
    }

    if (error) {
        return <AlbumListError><p>⚠️ No se pudieron cargar las canciones</p></AlbumListError>;
    }

    return (
        <AlbumListSongContainer>
            <AlbumListHeader>Canciones del álbum</AlbumListHeader>
            {songs && songs.length > 0 ? (
                <AlbumListSongsList>
                    <AlbumListSongsHeader>
                        <AlbumListSongsNumber>#</AlbumListSongsNumber>
                        <AlbumListSongsTitle>Canción</AlbumListSongsTitle>
                        <AlbumListSongsDuration>Duración</AlbumListSongsDuration>
                    </AlbumListSongsHeader>
                    {songs.map((song, index) => (
                        <AlbumListSongItem key={song.idTrack || index} onClick={() => handleSongClick(song)}>
                            <AlbumListSongsNumber>{index + 1}</AlbumListSongsNumber>
                            <AlbumListSongsTitle>{song.strTrack || 'N/A'}</AlbumListSongsTitle>
                            <AlbumListSongsDuration>
                                {song.intDuration ? Math.floor(song.intDuration / 1000 / 60) + ':' + 
                                 (Math.floor(song.intDuration / 1000) % 60).toString().padStart(2, '0') : 'N/A'}
                            </AlbumListSongsDuration>
                        </AlbumListSongItem>
                    ))}
                </AlbumListSongsList>
            ) : (
                <AlbumListNoSongs>No hay canciones disponibles para este álbum</AlbumListNoSongs>
            )}
        </AlbumListSongContainer>
    );
};

export default AlbumSongsList;
