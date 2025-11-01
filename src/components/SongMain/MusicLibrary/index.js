import Song from "./../Song";
import "./styles.css";

const MusicLibrary = ({ songs, onToggleSaved }) => {
    return(
        <>
           <p className="songs_title">Tus canciones guardadas</p>
          <div className="songs_topic">
            <p>Cancion</p>
            <p>Artista</p>
            <p>Album</p>
            <p>Duracion</p>
          </div>
          <div className="songs_container">
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
          </div>
        </>
    )
}
export default MusicLibrary;