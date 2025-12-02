import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
//Importar iconos
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import play from '../../Assets/play.png';
import { ChooseMainCreateButton, ChooseMainLibraryExpand, ChoosenMainLibraryButtonChoose, ChoosenMainLibraryButtonClose, ChoosenMainLibraryButtons, ChoosenMainLibraryCreate, ChoosenMainLibraryHeader, ChoosenMainLibraryPanel, ChoosenMainSection, ChoosenPlaylistSection, ChoosenSongActionButton, ChoosenSongDetailActions, ChoosenSongDetailAlbum, ChoosenSongDetailArtist, ChoosenSongDetailContainer, ChoosenSongDetailDuration, ChoosenSongDetailHeader, ChoosenSongDetailImage, ChoosenSongDetailInfo, ChoosenSongDetailTitle } from "./styles";

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
            <ChoosenMainSection>
                <ChoosenPlaylistSection>
                    <ChoosenMainLibraryHeader>
                        <p>Tu biblioteca</p>
                        <ChoosenMainLibraryCreate>
                            <ChooseMainCreateButton><img className="create_button-icon" src={mas} alt=""/>Crear</ChooseMainCreateButton>
                            <ChooseMainLibraryExpand src={expandir} alt=""/>
                        </ChoosenMainLibraryCreate>                
                    </ChoosenMainLibraryHeader>
                    <ChoosenMainLibraryButtons>
                        <ChoosenMainLibraryButtonClose><img className="close-img" src={close} alt="logo para cerrar"/></ChoosenMainLibraryButtonClose>
                        <ChoosenMainLibraryButtonChoose className={` ${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</ChoosenMainLibraryButtonChoose>
                        <ChoosenMainLibraryButtonChoose className={` ${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</ChoosenMainLibraryButtonChoose>
                    </ChoosenMainLibraryButtons>
                    {activePanel === 'artists' && (
                        <ChoosenMainLibraryPanel>
                            <ArtistList />
                        </ChoosenMainLibraryPanel>
                    )}
                    {activePanel === 'playlists' && (
                        <ChoosenMainLibraryPanel>
                            <PlaylistList />
                        </ChoosenMainLibraryPanel>
                    )}
                </ChoosenPlaylistSection>

                {/* Mostrar canción elegida */}
                <ChoosenSongDetailContainer>
                    <ChoosenSongDetailHeader>
                        {(song.strTrackThumb || song.strAlbumThumb) && (
                            <ChoosenSongDetailImage 
                                src={song.strTrackThumb || song.strAlbumThumb} 
                                alt={song.strTrack}
                                onError={(e) => {
                                    // Si ambas fallan, mostrar placeholder
                                    e.target.style.display = 'none';
                                }}
                            />
                        )}
                        <ChoosenSongDetailInfo>
                            <ChoosenSongDetailTitle>{song.strTrack}</ChoosenSongDetailTitle>
                            <ChoosenSongDetailArtist>{song.strArtist}</ChoosenSongDetailArtist>
                            <ChoosenSongDetailAlbum>Álbum: {song.strAlbum}</ChoosenSongDetailAlbum>
                            <ChoosenSongDetailDuration>Duración: {formatDuration(song.intDuration)}</ChoosenSongDetailDuration>
                        </ChoosenSongDetailInfo>
                    </ChoosenSongDetailHeader>

                    {/* Botones de acción */}
                    <ChoosenSongDetailActions>
                        <ChoosenSongActionButton className="play_button" title="Reproducir">
                            <img src={play} alt="Reproducir" />
                        </ChoosenSongActionButton>
                        <ChoosenSongActionButton 
                            className={`add_button ${isSaved ? 'saved' : ''}`}
                            onClick={handleAddToSearchResults}
                            title={isSaved ? "Guardada" : "Agregar a Búsqueda"}
                        >
                            {isSaved ? '✓' : '+'}
                        </ChoosenSongActionButton>
                    </ChoosenSongDetailActions>
                </ChoosenSongDetailContainer>
            </ChoosenMainSection>
        </div>
    );
}
export default ChoosenSong;