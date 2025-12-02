import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import AlbumSongsList from "./AlbumSongsList";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
//Importar iconos
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import { AlbumSongsAlbumArtistName, AlbumSongsAlbumCoverImg, AlbumSongsAlbumHeaderContent, AlbumSongsAlbumHeaderInfo, AlbumSongsAlbumHeaderSection, AlbumSongsAlbumInfoHeader, AlbumSongsAlbumView, AlbumSongsAlbumYearInfo, AlbumSongsMainCreateButton, AlbumSongsMainLibraryButtonChoose, AlbumSongsMainLibraryButtonClose, AlbumSongsMainLibraryButtons, AlbumSongsMainLibraryCreate, AlbumSongsMainLibraryExpand, AlbumSongsMainLibraryHeader, AlbumSongsMainLibraryPanel, AlbumSongsMainSection, AlbumSongsPlaylistSection } from "./styles";

const AlbumSongs = () => {
    const location = useLocation();
    const { album, artist } = location.state || { album: null, artist: null };
    
    const [activePanel, setActivePanel] = useState(null);
    const togglePanel = (panel) => setActivePanel(prev => (prev === panel ? null : panel));

    if (!album || !artist) {
        return <div><Header /><p>Álbum no encontrado</p></div>;
    }

    return (
        <div>
            <Header />
            
            <AlbumSongsMainSection>
                <AlbumSongsPlaylistSection>
                    <AlbumSongsMainLibraryHeader>
                        <p>Tu biblioteca</p>
                        <AlbumSongsMainLibraryCreate>
                            <AlbumSongsMainCreateButton><img className="create_button-icon" src={mas} alt=""/>Crear</AlbumSongsMainCreateButton>
                            <AlbumSongsMainLibraryExpand src={expandir} alt=""/>
                        </AlbumSongsMainLibraryCreate>                
                    </AlbumSongsMainLibraryHeader>
                    <AlbumSongsMainLibraryButtons>
                        <AlbumSongsMainLibraryButtonClose><img className="close-img" src={close} alt="logo para cerrar"/></AlbumSongsMainLibraryButtonClose>
                        <AlbumSongsMainLibraryButtonChoose className={` ${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</AlbumSongsMainLibraryButtonChoose>
                        <AlbumSongsMainLibraryButtonChoose className={` ${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</AlbumSongsMainLibraryButtonChoose>
                    </AlbumSongsMainLibraryButtons>
                    {activePanel === 'artists' && (
                        <AlbumSongsMainLibraryPanel>
                            <ArtistList />
                        </AlbumSongsMainLibraryPanel>
                    )}
                    {activePanel === 'playlists' && (
                        <AlbumSongsMainLibraryPanel>
                            <PlaylistList />
                        </AlbumSongsMainLibraryPanel>
                    )}
                </AlbumSongsPlaylistSection>

                {/* Mostrar información del álbum y sus canciones */}
                <AlbumSongsAlbumView>
                    <AlbumSongsAlbumHeaderSection>
                        <AlbumSongsAlbumHeaderContent>
                            {album.strAlbumThumb && (
                                <AlbumSongsAlbumCoverImg src={album.strAlbumThumb} alt={album.strAlbum} />
                            )}
                            <AlbumSongsAlbumHeaderInfo>
                                <AlbumSongsAlbumInfoHeader>{album.strAlbum}</AlbumSongsAlbumInfoHeader>
                                <AlbumSongsAlbumArtistName>{album.strArtist}</AlbumSongsAlbumArtistName>
                                <AlbumSongsAlbumYearInfo>Año: {album.intYearReleased}</AlbumSongsAlbumYearInfo>
                            </AlbumSongsAlbumHeaderInfo>
                        </AlbumSongsAlbumHeaderContent>
                    </AlbumSongsAlbumHeaderSection>

                    {/* Mostrar canciones del álbum */}
                    <AlbumSongsList album={album} />
                </AlbumSongsAlbumView>
            </AlbumSongsMainSection>
        </div>
    );
}
export default AlbumSongs;