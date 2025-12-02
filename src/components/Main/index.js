import Header from "../Header";
import SongMain from "../SongMain/";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import { useState } from 'react';

import { MainContainer, MainLibraryButtons, MainLibraryButtonsChoose, MainLibraryButtonsClose, MainLibraryCreate, MainLibraryCreateButton, MainLibraryExpand, MainLibraryHeader, MainLibraryPanel, MainPlaylistSection } from "./styles";

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
    <MainContainer> 
      <MainPlaylistSection>
        <MainLibraryHeader>
          <p>Tu biblioteca</p>
            <MainLibraryCreate>
              <MainLibraryCreateButton><img className="create_button-icon" src={mas} alt=""/>Crear</MainLibraryCreateButton>
              <MainLibraryExpand src={expandir} alt=""/>
            </MainLibraryCreate>                
        </MainLibraryHeader>
        <MainLibraryButtons>
          <MainLibraryButtonsClose><img className="close-img" src={close} alt="logo para cerrar"/></MainLibraryButtonsClose>
          <MainLibraryButtonsChoose className={`${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</MainLibraryButtonsChoose>
          <MainLibraryButtonsChoose className={`${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</MainLibraryButtonsChoose>
        </MainLibraryButtons>
              {activePanel === 'artists' && (
                <MainLibraryPanel>
                  <ArtistList />
                </MainLibraryPanel>
              )}
              {activePanel === 'playlists' && (
                <MainLibraryPanel>
                  <PlaylistList onToggleSection={onToggleSection} />
                </MainLibraryPanel>
              )}
          </MainPlaylistSection>
              <SongMain 
                showLibrary={false} 
                showSearchResults={true}
                onSaveSong={handleSaveSong}
                storageKey="mainSavedSongs"
              />
      </MainContainer> 
    </div>
  );
}
export default Main;