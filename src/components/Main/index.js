import Header from "../Header";
import SongMain from "../SongMain/";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import { useState } from 'react';
import './styles.css';

const Main = ({ onToggleSection }) => {
  const [activePanel, setActivePanel] = useState(null);
  const togglePanel = (panel) => setActivePanel(prev => (prev === panel ? null : panel));
  
  // Usar una clave específica para Main
  const handleSaveSong = (song) => {
    const savedSongs = JSON.parse(localStorage.getItem('mainSavedSongs') || '[]');
    savedSongs.push(song);
    localStorage.setItem('mainSavedSongs', JSON.stringify(savedSongs));
  };

  return (
    <div>
      <Header />
    <div className="main"> 
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
                  <PlaylistList onToggleSection={onToggleSection} />
                </div>
              )}
          </div>
            <div className="main_section">
              <SongMain 
                showLibrary={false} 
                showSearchResults={true}
                onSaveSong={handleSaveSong}
                storageKey="mainSavedSongs"
              />
            </div>
      </div> 
    </div>
  );
}
export default Main;