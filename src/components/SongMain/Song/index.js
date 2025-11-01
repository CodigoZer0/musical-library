import './styles.css';
import add from './../../../Assets/boton-agregar-hover.png'
//import added from './../../../Assets/ok.png';
const Song = ({ key, image, title, artist, album, duration, added, onToggleSaved, hideControls }) => {
    return (
        <section className="song" key={key}>
            <img src={image} alt={title} className="song_image" />
            <h2 className="song_title">{title}</h2>
            <p className="song_artist">{artist} </p>
            <p className="song_album">{album}</p>
            <p className='song_duration'>{duration}</p>

            {!hideControls && (
                <div className='song_add-container'>
                    <button className='song_add' onClick={onToggleSaved} type="button">
                        <img src={add} alt='Add' className='add_button'/>
                    </button>
                    <span className='tooltip-text'>Agregar a la lista de reproducción</span>
                </div>
            )}
        </section>
    );
};

export default Song;