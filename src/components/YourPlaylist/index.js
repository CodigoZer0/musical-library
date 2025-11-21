import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import SongMain from "../SongMain/";
import { useState, useEffect } from 'react';
import './styles.css';

import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';

const YourPlaylist = ({ onToggleSection }) => {
    const [activePanel, setActivePanel] = useState(null);
    
    const togglePanel = (panel) => setActivePanel(prev => (prev === panel ? null : panel));

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
                <SongMain showLibrary={true} showSearchResults={false} />
              </div>
        </div> 
      </div>
    );
}
export default YourPlaylist;