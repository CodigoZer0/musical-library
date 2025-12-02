import Play from '../../../Assets/play.png';
import Menu from '../../../Assets/menu.png';
import Album from './Album';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { ArtistViewAlbumIndex, ArtistViewAlbumItem, ArtistViewError, ArtistViewLoading, ArtistViewMain, ArtistViewMusic, ArtistViewMusicOptions, ArtistViewMusicOptionsMenu, ArtistViewMusicOptionsPlay, ArtistViewMusicPopular, ArtistViewPhoto, ArtistViewPhotoImg, ArtistViewPhotoName, ArtistViewTopMusic } from './styles';

const ArtistView = () => {
    const location = useLocation();
    const artistNameFromSearch = location.state?.artist?.strArtist;
    
    // Usar useFetch para obtener datos frescos del artista
    const { albums, artistInfo, loading, error } = useFetch(artistNameFromSearch || '');
    
    // Extraer el artista de artistInfo
    const artist = artistInfo?.artists?.[0];
    const albumsList = albums?.album || [];

    return(
        <ArtistViewMain>
            {/* Estado de carga */}
            {loading && (
                <ArtistViewLoading>
                    <p>Cargando artista...</p>
                </ArtistViewLoading>
            )}

            {/* Estado de error */}
            {error && !loading && (
                <ArtistViewError>
                    <p>❌ No se pudo cargar el artista</p>
                </ArtistViewError>
            )}

            {/* Contenido cuando hay datos */}
            {!loading && !error && artist && (
                <>
                    <ArtistViewPhoto>
                        <ArtistViewPhotoName>
                            <ArtistViewPhotoImg  
                                src={artist.strArtistThumb || ''} 
                                alt={`Foto de ${artist.strArtist}`}
                            />
                            <p>{artist.strArtist}</p>
                        </ArtistViewPhotoName>
                    </ArtistViewPhoto>
                    
                    <ArtistViewMusic>
                        <ArtistViewMusicOptions>
                            <ArtistViewMusicOptionsPlay src={Play} alt="botón de play"/>
                            <ArtistViewMusicOptionsMenu src={Menu} alt="menu de opciones"/>
                        </ArtistViewMusicOptions>
                        <ArtistViewMusicPopular>
                            <p>Popular</p>
                            <ArtistViewTopMusic>
                                {albumsList.length > 0 ? (
                                    albumsList.map((album, index) => (
                                        <ArtistViewAlbumItem key={album.idAlbum}>
                                            <ArtistViewAlbumIndex>{index + 1}</ArtistViewAlbumIndex>
                                            <Album album={album} artist={artist} />
                                        </ArtistViewAlbumItem>
                                    ))
                                ) : (
                                    <p>No hay álbumes disponibles</p>
                                )}
                            </ArtistViewTopMusic>
                        </ArtistViewMusicPopular>
                    </ArtistViewMusic>
                </>
            )}
        </ArtistViewMain>
    );
}
export default ArtistView;