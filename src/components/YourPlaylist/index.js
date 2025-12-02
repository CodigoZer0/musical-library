import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import SongMain from "../SongMain/";
import { useState, useEffect } from 'react';

import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import { YourPlaylistMainCreateButton, YourPlaylistMainLibraryButtonChoose, YourPlaylistMainLibraryButtonClose, YourPlaylistMainLibraryButtons, YourPlaylistMainLibraryCreate, YourPlaylistMainLibraryExpand, YourPlaylistMainLibraryHeader, YourPlaylistMainLibraryPanel, YourPlaylistMainSection, YourPlaylistPlaylistSection, YourPlayListSongMain } from "./styles";

const YourPlaylist = ({ onToggleSection }) => {
    const [activePanel, setActivePanel] = useState(null);
    
    const togglePanel = (panel) => setActivePanel(prev => (prev === panel ? null : panel));

    return (
      <div>
        <Header />
      <YourPlaylistMainSection> 
        <YourPlaylistPlaylistSection>
          <YourPlaylistMainLibraryHeader>
            <p>Tu biblioteca</p>
              <YourPlaylistMainLibraryCreate>
                <YourPlaylistMainCreateButton><img className="create_button-icon" src={mas} alt=""/>Crear</YourPlaylistMainCreateButton>
                <YourPlaylistMainLibraryExpand src={expandir} alt=""/>
              </YourPlaylistMainLibraryCreate>                
          </YourPlaylistMainLibraryHeader>
          <YourPlaylistMainLibraryButtons>
            <YourPlaylistMainLibraryButtonClose><img className="close-img" src={close} alt="logo para cerrar"/></YourPlaylistMainLibraryButtonClose>
            <YourPlaylistMainLibraryButtonChoose className={` ${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</YourPlaylistMainLibraryButtonChoose>
            <YourPlaylistMainLibraryButtonChoose className={` ${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</YourPlaylistMainLibraryButtonChoose>
          </YourPlaylistMainLibraryButtons>
                {activePanel === 'artists' && (
                  <YourPlaylistMainLibraryPanel>
                    <ArtistList />
                  </YourPlaylistMainLibraryPanel>
                )}
                {activePanel === 'playlists' && (
                  <YourPlaylistMainLibraryPanel>
                    <PlaylistList onToggleSection={onToggleSection} />
                  </YourPlaylistMainLibraryPanel>
                )}
            </YourPlaylistPlaylistSection>
            <YourPlayListSongMain>
              <SongMain showLibrary={true} showSearchResults={false} />
            </YourPlayListSongMain>
        </YourPlaylistMainSection> 
      </div>
    );
}
export default YourPlaylist;