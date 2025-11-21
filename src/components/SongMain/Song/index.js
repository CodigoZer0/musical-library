import './styles.css';
import add from './../../../Assets/boton-agregar-hover.png'
import { useState } from 'react';

const Song = ({ key, image, title, artist, album, duration, added, onToggleSaved, hideControls }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <section className="song" key={key}>
            <div className="song_image_container">
                {image && !imageError ? (
                    <img 
                        src={image} 
                        alt={title} 
                        className="song_image"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="song_image_placeholder">No imagen</div>
                )}
            </div>
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