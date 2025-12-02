import add from './../../../Assets/boton-agregar-hover.png'
import { useState } from 'react';
import { AddButtonImage, SongAddButton, SongAddContainer, SongAlbum, SongArtist, SongDuration, SongImage, SongImageContainer, SongImagePlaceHolder, SongSection, SongTitle, TooltipText } from './styles';

const Song = ({ key, image, title, artist, album, duration, added, onToggleSaved, hideControls }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <SongSection key={key}>
            <SongImageContainer>
                {image && !imageError ? (
                    <SongImage 
                        src={image} 
                        alt={title} 
                        onError={handleImageError}
                    />
                ) : (
                    <SongImagePlaceHolder>No imagen</SongImagePlaceHolder>
                )}
            </SongImageContainer>
            <SongTitle>{title}</SongTitle>
            <SongArtist>{artist} </SongArtist>
            <SongAlbum>{album}</SongAlbum>
            <SongDuration>{duration}</SongDuration>

            {!hideControls && (
                <SongAddContainer>
                    <SongAddButton onClick={onToggleSaved} type="button">
                        <AddButtonImage src={add} alt='Add' />
                    </SongAddButton>
                    <TooltipText>Agregar a la lista de reproducción</TooltipText>
                </SongAddContainer>
            )}
        </SongSection>
    );
};

export default Song;