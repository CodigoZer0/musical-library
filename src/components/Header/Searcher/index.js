import './styles.css';
import lupa from '../../../Assets/lupa.png';
import useFetch from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searcher = () => {
    const [displayValue, setDisplayValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { albums, artistInfo, loading, error } = useFetch(searchTerm);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(displayValue);
        console.log("Search term submitted:", searchTerm.trim());
    };

    const handleInputChange = (e) => {
        setDisplayValue(e.target.value);
    };

    useEffect(() => {
        if (artistInfo?.artists && artistInfo.artists.length > 0) {
            const artist = artistInfo.artists[0];
            console.log("Artist found:", artist);
            
            // Redirigir a la página del artista con los datos
            navigate(`/artist/${artist.idArtist}`, { 
                state: { 
                    artist: {
                        idArtist: artist.idArtist,
                        strArtist: artist.strArtist,
                        strArtistThumb: artist.strArtistThumb,
                        strBiographyEN: artist.strBiographyEN
                    },
                    albums: albums.album || []
                }
            });
        }
    }, [artistInfo]);

    useEffect(() => {
        if (error) {
            console.error("Error fetching data in Searcher:", error);
        }
    }, [error]);

    return (
        <>
            <article className="header_homesearch"/>
            <form className="header_homesearch-search" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="artist" 
                    className="header_input" 
                    placeholder="¿Qué deseas reproducir?" 
                    value={displayValue}
                    onChange={handleInputChange}
                />
                <button type="submit" id='search-button'>
                    <img className="header_img" src={lupa} alt="buscar"/> 
                </button>
            </form>
        </>
    );
};

export default Searcher;