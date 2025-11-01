import Song from "../Song";
import "./styles.css"
const SearchResults = ({ songs, savedSongs = [], onToggleSaved }) => {
    return(
        <>
           <p className="songs_title">Tus busquedas recientes</p>
          <div className="songs_topic">
            <p>Cancion</p>
            <p>Artista</p>
            <p>Album</p>
            <p>Duracion</p>
          </div>
          <div className="songs_container">
             {songs.map(song => {
              const added = savedSongs.some(s => s.key === song.key);
              return (
                <Song
                  key={song.key}
                  image={song.image}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                  duration={song.duration}
                  added={added}
                  onToggleSaved={() => onToggleSaved(song)}
                />
              );
            })}
          </div>
        </>
    )
}
export default SearchResults;