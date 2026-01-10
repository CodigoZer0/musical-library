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
            {songs && songs.length > 0 ? (
              songs.map ((song) => {
                const { key, image, title, artist, album, duration } = song;
                return (
                  <Song
                    key={key || song.idTrack}
                    image={image}
                    title={title}
                    artist={artist}
                    album={album}
                    duration={duration}
                    /* Mostrar botón de eliminar */
                    hideControls={false}
                    isDelete={true}
                    onToggleSaved={() => onToggleSaved && onToggleSaved(song)}
                  />
                );
              })
            ) : (
              <p className="no_songs">No hay canciones guardadas</p>
            )}
          </LibrarySongsContainer>
        </>
    )
}
export default MusicLibrary;