import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

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
        return <div className="album_songs_loading"><p>Cargando canciones...</p></div>;
    }

    if (error) {
        return <div className="album_songs_error"><p>⚠️ No se pudieron cargar las canciones</p></div>;
    }

    return (
        <div className="album_songs_container">
            <h3>Canciones del álbum</h3>
            {songs && songs.length > 0 ? (
                <div className="songs_list">
                    <div className="songs_header">
                        <p className="song_number">#</p>
                        <p className="song_title">Canción</p>
                        <p className="song_duration">Duración</p>
                    </div>
                    {songs.map((song, index) => (
                        <div key={song.idTrack || index} className="song_item" onClick={() => handleSongClick(song)}>
                            <p className="song_number">{index + 1}</p>
                            <p className="song_title">{song.strTrack || 'N/A'}</p>
                            <p className="song_duration">
                                {song.intDuration ? Math.floor(song.intDuration / 1000 / 60) + ':' + 
                                 (Math.floor(song.intDuration / 1000) % 60).toString().padStart(2, '0') : 'N/A'}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no_songs">No hay canciones disponibles para este álbum</p>
            )}
        </div>
    );
};

export default AlbumSongsList;
