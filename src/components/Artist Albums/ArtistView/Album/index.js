import { AlbumSongInfo, AlbumSongInfoYear, AlbumSongName, AlbumSongNameArtist, AlbumSongNameName, AlbumTopMusicAlbum, AlbumTopMusicAlbumCover } from './styles';
import { useNavigate } from 'react-router-dom';

const Album = ({ album, artist }) => { 
    const navigate = useNavigate();

    if (!album) {
        return <AlbumTopMusicAlbum>No hay datos del álbum</AlbumTopMusicAlbum>;
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
        <AlbumTopMusicAlbum onClick={handleAlbumClick}>
            {album.strAlbumThumb && (
                <AlbumTopMusicAlbumCover 
                    className="top_music-album-cover" 
                    src={album.strAlbumThumb} 
                    alt={album.strAlbum}
                />
            )}
            <AlbumSongName>
                <AlbumSongNameName>{album.strAlbum}</AlbumSongNameName>
                <AlbumSongNameArtist>{album.strArtist}</AlbumSongNameArtist>
            </AlbumSongName>
            <AlbumSongInfo>
                <AlbumSongInfoYear>Año: {album.intYearReleased}</AlbumSongInfoYear>
            </AlbumSongInfo>
        </AlbumTopMusicAlbum>
    );
}
export default Album;