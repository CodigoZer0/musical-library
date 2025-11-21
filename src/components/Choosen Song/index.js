import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
//Importar iconos
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import play from '../../Assets/play.png';

const ChoosenSong = () => {
    const location = useLocation();
    const { song } = location.state || { song: null };
    
    const [activePanel, setActivePanel] = useState(null);
    const [isSaved, setIsSaved] = useState(false);
    
    const togglePanel = (panel) => setActivePanel(prev => (prev === panel ? null : panel));

    if (!song) {
        return <div><Header /><p>Canción no encontrada</p></div>;
    }

    const handleAddToSearchResults = () => {
        // Guardar en localStorage
        const savedSongs = JSON.parse(localStorage.getItem('userSavedSongs') || '[]');
        const songExists = savedSongs.some(s => s.idTrack === song.idTrack);
        
        if (!songExists) {
            const newSong = {
                key: song.idTrack,
                idTrack: song.idTrack,
                image: song.strTrackThumb || '',
                title: song.strTrack,
                artist: song.strArtist,
                album: song.strAlbum,
                duration: song.intDuration ? Math.floor(song.intDuration / 1000 / 60) + ':' + 
                         (Math.floor(song.intDuration / 1000) % 60).toString().padStart(2, '0') : '0:00',
                added: true
            };
            savedSongs.push(newSong);
            localStorage.setItem('userSavedSongs', JSON.stringify(savedSongs));
            setIsSaved(true);
        }
    };

    const formatDuration = (ms) => {
        if (!ms) return '0:00';
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    };

    return (
        <div>
            <Header />
            <div className="main_section">
                <div className="playlist_section">
                    <div className="main_library-header">
                        <p>Tu biblioteca</p>
                        <div className="main_library-create">
                            <button className="create_button"><img className="create_button-icon" src={mas} alt=""/>Crear</button>
                            <img className="main_library_expand" src={expandir} alt=""/>
                        </div>                
                    </div>
                    <div className="main_library-buttons">
                        <button className="main_library-buttons-close"><img className="close-img" src={close} alt="logo para cerrar"/></button>
                        <button className={`main_library-buttons-choose ${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</button>
                        <button className={`main_library-buttons-choose ${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</button>
                    </div>
                    {activePanel === 'artists' && (
                        <div className="main_library-panel">
                            <ArtistList />
                        </div>
                    )}
                    {activePanel === 'playlists' && (
                        <div className="main_library-panel">
                            <PlaylistList />
                        </div>
                    )}
                </div>

                {/* Mostrar canción elegida */}
                <div className="song_detail_container">
                    <div className="song_detail_header">
                        {(song.strTrackThumb || song.strAlbumThumb) && (
                            <img 
                                className="song_detail_image" 
                                src={song.strTrackThumb || song.strAlbumThumb} 
                                alt={song.strTrack}
                                onError={(e) => {
                                    // Si ambas fallan, mostrar placeholder
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                        <div className="song_detail_info">
                            <h2>{song.strTrack}</h2>
                            <p className="song_detail_artist">{song.strArtist}</p>
                            <p className="song_detail_album">Álbum: {song.strAlbum}</p>
                            <p className="song_detail_duration">Duración: {formatDuration(song.intDuration)}</p>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="song_detail_actions">
                        <button className="action_button play_button" title="Reproducir">
                            <img src={play} alt="Reproducir" />
                        </button>
                        <button 
                            className={`action_button add_button ${isSaved ? 'saved' : ''}`}
                            onClick={handleAddToSearchResults}
                            title={isSaved ? "Guardada" : "Agregar a Búsqueda"}
                        >
                            {isSaved ? '✓' : '+'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChoosenSong;