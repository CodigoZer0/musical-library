import axios from "axios"
import { use, useEffect, useState } from "react"

const useFetch = (artist) => {
    const [albums, setAlbums] = useState([]);
    const [artistInfo, setArtistInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // no hacer nada si artist está vacío
        if (!artist || artist.trim() === "") {
            setAlbums([]);
            setError(null);
            setLoading(false);
            return;
        }

        const fetchAlbums = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artist}`
                );
                console.log("API Response:", response.data);
                setAlbums(response.data);
            } catch (err) {
                console.error("API Error:", err);
                setError(err);
                setAlbums([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, [artist]);
    useEffect(() => {
        const fetchArtistInfo = async () => {
            if (!artist || artist.trim() === "") {
                setArtistInfo(null);
                return;
            }
            try {
                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist}`
                );
                setArtistInfo(response.data);
            } catch (err) {
                console.error("Artist Info API Error:", err);
                setArtistInfo(null);
            }
        };
        fetchArtistInfo();
    }, [artist]);

    return { albums, artistInfo, loading, error };
};

export default useFetch;