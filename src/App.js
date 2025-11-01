import Header from "./components/Header/index.js";
import SongMain from "./components/SongMain/index.js";
import ArtistList from "./components/ArtistList/index.js";
import PlaylistList from "./components/PlaylistList/index.js";
import { useState } from 'react';
import './styles/app.css';
//Importar imagenes de las canciones
//Importar imagenes de los artistas

//Importar iconos
import mas from './Assets/mas.png';
import expandir from './Assets/expandir.png';
import close from './Assets/x.png';

function App() {
  const [activePanel, setActivePanel] = useState(null);
  const togglePanel = (panel) => setActivePanel(prev => (prev === panel ? null : panel));
  const [showLibrary, setShowLibrary] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(true);
  const toggleLibrary = () => setShowLibrary(v => !v);
  const toggleSearchResults = () => setShowSearchResults(v => !v);
  const toggleSection = (section) => {
    if (section === 'library') toggleLibrary();
    if (section === 'search') toggleSearchResults();
  }

  return (
    <div>
      <Header />
      
      <div className="main_section">
        <div className="playlist_section">
          <div className="main_library-header">
                <p>Tu biblioteca</p>
                <div className="main_library-create">
                    <button className="create_button"><img className="create_button-icon" src={mas} alt=""/>Crear</button>
                    <img className="main_library_expand" src={expandir} alt=""/>
                </div>                
            </div>
      <div className="main_library-buttons">
        <button className="main_library-buttons-close"><img className="close-img" src={close} alt="logo para cerrar"/></button>
        <button className={`main_library-buttons-choose ${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</button>
        <button className={`main_library-buttons-choose ${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</button>
      </div>
            {activePanel === 'artists' && (
              <div className="main_library-panel">
                <ArtistList />
              </div>
            )}
            {activePanel === 'playlists' && (
              <div className="main_library-panel">
                <PlaylistList onToggleSection={toggleSection} />
              </div>
            )}

        </div>
          <SongMain showLibrary={showLibrary} showSearchResults={showSearchResults} />
      </div>
    </div>
  );
}

export default App;
