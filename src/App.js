
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ArtistAlbums from "./components/Artist Albums";
import AlbumSongs from "./components/Album Songs";
import ChoosenSong from "./components/Choosen Song";
import YourPlaylist from "./components/YourPlaylist";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  

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

export default App;
