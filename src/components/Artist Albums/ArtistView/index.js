import Play from '../../../Assets/play.png';
import Menu from '../../../Assets/menu.png';
import './styles.css';
import Album from './Album';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

const ArtistView = () => {
    const location = useLocation();
    const artistNameFromSearch = location.state?.artist?.strArtist;
    
    // Usar useFetch para obtener datos frescos del artista
    const { albums, artistInfo, loading, error } = useFetch(artistNameFromSearch || '');
    
    // Extraer el artista de artistInfo
    const artist = artistInfo?.artists?.[0];
    const albumsList = albums?.album || [];

    return(
        <article className="main_artist-view">
            {/* Estado de carga */}
            {loading && (
                <div className="loading_artist">
                    <p>Cargando artista...</p>
                </div>
            )}

            {/* Estado de error */}
            {error && !loading && (
                <div className="error_artist">
                    <p>❌ No se pudo cargar el artista</p>
                </div>
            )}

            {/* Contenido cuando hay datos */}
            {!loading && !error && artist && (
                <>
                    <div className="main_artist-photo">
                        <div className="main_artist-photo-name">
                            <img 
                                className="artist-photo-img" 
                                src={artist.strArtistThumb || ''} 
                                alt={`Foto de ${artist.strArtist}`}
                            />
                            <p>{artist.strArtist}</p>
                        </div>
                    </div>
                    
                    <div className="main_artist-view-music">
                        <div className="main_artist-view-music-options">
                            <img className="music-options-play" src={Play} alt="botón de play"/>
                            <img className="music-options-menu" src={Menu} alt="menu de opciones"/>
                        </div>
                        <div className="main_artist-view-music-popular">
                            <p>Popular</p>
                            <div className="top_music">
                                {albumsList.length > 0 ? (
                                    albumsList.map((album, index) => (
                                        <div key={album.idAlbum} className="album_item">
                                            <p className="one">{index + 1}</p>
                                            <Album album={album} artist={artist} />
                                        </div>
                                    ))
                                ) : (
                                    <p>No hay álbumes disponibles</p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </article>
    );
}
export default ArtistView;