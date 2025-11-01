import React, { useEffect, useState } from "react";
import MusicLibrary from "./MusicLibrary";
import SearchResults from "./SearchResults";
import "./styles.css"
import Song1_img from './../../Assets/song1.jpg';
import Song2_img from './../../Assets/song2.jpg';
import Song3_img from './../../Assets/song3.jpg';
import Song4_img from './../../Assets/song4.jpg';
import Song5_img from './../../Assets/song5.jpeg';
import Song6_img from './../../Assets/song6.jpeg';
const SongMain = ({ showLibrary = true, showSearchResults = true }) => {
  const songs = [
    { key: 1, image: Song1_img, title: "Open Hearts", artist: "The Weeknd", album: "Hurry Up Tomorrow", duration: "3:54", added: false },
    { key: 2, image: Song2_img, title: "Digital Love", artist: "Daft Punk", album: "Discovery", duration: "5:01", added: false },
    { key: 3, image: Song3_img, title: "Gigolo", artist: "bbno$", album: "gigolo", duration: "1:58", added: false },
    { key: 4, image: Song4_img, title: "Golden", artist: "HUNTR/X", album: "Golden", duration: "3:15", added: false },
    { key: 5, image: Song5_img, title: "Pompeii", artist: "Bastille", album: "Bad Blood", duration: "3:34", added: false },
    { key: 6, image: Song6_img, title: "Shelter", artist: "Porter Robinson", album: "Shelter", duration: "2:49", added: false },
  ]  
  const [savedSongs, setSavedSongs] = useState([

  ]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("savedSongs");
      if (raw) setSavedSongs(JSON.parse(raw));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // guardar savedSongs cuando cambie
  useEffect(() => {
    try {
      localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
    } catch (e) {
      console.error(e);
    }
  }, [savedSongs]);

  const onToggleSaved = (song) => {
    setSavedSongs(prev => {
      const exists = prev.some(s => s.key === song.key);
      if (exists) {
        // eliminar
        return prev.filter(s => s.key !== song.key);
      }
      // añadir (guardar solo campos necesarios)
      return [...prev, {
        key: song.key,
        image: song.image,
        title: song.title,
        artist: song.artist,
        album: song.album,
        duration: song.duration
      }];
    });
  };

  return (
    <div className="songs_main">
      {showLibrary && (
        <MusicLibrary songs={savedSongs} onToggleSaved={onToggleSaved} />
      )}

      {showSearchResults && (
        <SearchResults songs={songs} savedSongs={savedSongs} onToggleSaved={onToggleSaved} />
      )}
    </div>
  );

}

export default SongMain;