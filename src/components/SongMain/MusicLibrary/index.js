import Song from "./../Song";
import { LibrarySongsTitle, LibrarySongsTopic, LibrarySongsContainer } from "./styles";


const MusicLibrary = ({ songs, onToggleSaved }) => {
    return(
        <>
           <LibrarySongsTitle>Tus canciones guardadas</LibrarySongsTitle>
          <LibrarySongsTopic>
            <p>Cancion</p>
            <p>Artista</p>
            <p>Album</p>
            <p>Duracion</p>
          </LibrarySongsTopic>
          <LibrarySongsContainer>
            {songs.map ((song) => {
                const { key, image, title, artist, album, duration } = song;
                return (
                  <Song
                    key={key}
                    image={image}
                    title={title}
                    artist={artist}
                    album={album}
                    duration={duration}
                    /* ocultar y deshabilitar el botón en la biblioteca */
                    hideControls={true}
                    /* onToggleSaved sigue disponible si lo necesitas para otra lógica */
                    onToggleSaved={() => onToggleSaved && onToggleSaved(song)}
                  />
                );
            })}
          </LibrarySongsContainer>
        </>
    )
}
export default MusicLibrary;