
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ArtistAlbums from "./components/Artist Albums";
import AlbumSongs from "./components/Album Songs";
import ChoosenSong from "./components/Choosen Song";
import YourPlaylist from "./components/YourPlaylist";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { useEffect, useRef } from "react";
import { loadSavedSongs } from "./actions";

function AppContent() {
  const dispatch = useDispatch();
  const hasLoadedRef = useRef(false);

  // Cargar canciones guardadas UNA SOLA VEZ al inicializar la app
  useEffect(() => {
    if (!hasLoadedRef.current) {
      console.log('=== APP: Inicializando - Cargando canciones ===');
      const stored = JSON.parse(localStorage.getItem('userSavedSongs') || '[]');
      console.log('APP: Encontradas en localStorage:', stored.length, 'canciones');
      console.log('APP: Contenido:', stored);
      
      // Siempre despachar, incluso si está vacío (para inicializar Redux)
      dispatch(loadSavedSongs(stored));
      console.log('APP: ✅ loadSavedSongs despachado');
      
      hasLoadedRef.current = true;
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/artist/:artistId" element={<ArtistAlbums />} />
        <Route path="/album_songs" element={<AlbumSongs />} />
        <Route path="/song" element={<ChoosenSong />} />
        <Route path="/your_playlist" element={<YourPlaylist />} />
      </Routes>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
