import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import AlbumSongsList from "./AlbumSongsList";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
//Importar imagenes de las canciones
//Importar imagenes de los artistas

//Importar iconos
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';

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

                {/* Mostrar información del álbum y sus canciones */}
                <article className="album_view">
                    <div className="album_header_section">
                        <div className="album_header_content">
                            {album.strAlbumThumb && (
                                <img className="album_cover_img" src={album.strAlbumThumb} alt={album.strAlbum} />
                            )}
                            <div className="album_header_info">
                                <h2>{album.strAlbum}</h2>
                                <p className="album_artist_name">{album.strArtist}</p>
                                <p className="album_year_info">Año: {album.intYearReleased}</p>
                            </div>
                        </div>
                    </div>

                    {/* Mostrar canciones del álbum */}
                    <AlbumSongsList album={album} />
                </article>
            </div>
        </div>
    );
}
export default AlbumSongs;