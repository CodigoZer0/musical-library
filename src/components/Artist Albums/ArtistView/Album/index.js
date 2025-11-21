import './styles.css';
import { useNavigate } from 'react-router-dom';

const Album = ({ album, artist }) => { 
    const navigate = useNavigate();

    if (!album) {
        return <div className="top_music-album">No hay datos del álbum</div>;
    }

    const handleAlbumClick = () => {
        navigate('/album_songs', { 
            state: { 
                album: {
                    idAlbum: album.idAlbum,
                    strAlbum: album.strAlbum,
                    strAlbumThumb: album.strAlbumThumb,
                    intYearReleased: album.intYearReleased,
                    strArtist: album.strArtist
                },
                artist: artist
            }
        });
    };

    return(
        <div className="top_music-album" onClick={handleAlbumClick}>
            {album.strAlbumThumb && (
                <img 
                    className="top_music-album-cover" 
                    src={album.strAlbumThumb} 
                    alt={album.strAlbum}
                />
            )}
            <div className="song-name">
                <p className="song-name-name">{album.strAlbum}</p>
                <p className="song-name-artist">{album.strArtist}</p>
            </div>
            <div className="song-info">
                <p className="song-info-played">Año: {album.intYearReleased}</p>

            </div> 
        </div>
    );
}
export default Album;