import Header from "../Header";
import ArtistList from "../ArtistList";
import PlaylistList from "../PlaylistList";
import { useState } from 'react';

//Importar iconos
import mas from '../../Assets/mas.png';
import expandir from '../../Assets/expandir.png';
import close from '../../Assets/x.png';
import ArtistView from "./ArtistView";
import { ArtistAlbumsMainCreateButton, ArtistAlbumsMainLibraryButtonChoose, ArtistAlbumsMainLibraryButtons, ArtistAlbumsMainLibraryCreate, ArtistAlbumsMainLibraryExpand, ArtistAlbumsMainLibraryHeader, ArtistAlbumsMainLibraryPanel, ArtistAlbumsMainSection, ArtistAlbumsPlaylistSection } from "./styles";
import { ChoosenMainLibraryButtonClose } from "../Choosen Song/styles";

const ArtistAlbums = () => {
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
      <ArtistAlbumsMainSection>
        <ArtistAlbumsPlaylistSection>
          <ArtistAlbumsMainLibraryHeader>
                <p>Tu biblioteca</p>
                <ArtistAlbumsMainLibraryCreate>
                    <ArtistAlbumsMainCreateButton><img className="create_button-icon" src={mas} alt=""/>Crear</ArtistAlbumsMainCreateButton>
                    <ArtistAlbumsMainLibraryExpand src={expandir} alt=""/>
                </ArtistAlbumsMainLibraryCreate>                
            </ArtistAlbumsMainLibraryHeader>
      <ArtistAlbumsMainLibraryButtons>
        <ChoosenMainLibraryButtonClose><img className="close-img" src={close} alt="logo para cerrar"/></ChoosenMainLibraryButtonClose>
        <ArtistAlbumsMainLibraryButtonChoose className={` ${activePanel === 'artists' ? 'is-active' : ''}`} onClick={() => togglePanel('artists')}>Artistas</ArtistAlbumsMainLibraryButtonChoose>
        <ArtistAlbumsMainLibraryButtonChoose className={` ${activePanel === 'playlists' ? 'is-active' : ''}`} onClick={() => togglePanel('playlists')}>Playlists</ArtistAlbumsMainLibraryButtonChoose>
      </ArtistAlbumsMainLibraryButtons>
            {activePanel === 'artists' && (
              <ArtistAlbumsMainLibraryPanel>
                <ArtistList />
              </ArtistAlbumsMainLibraryPanel>
            )}
            {activePanel === 'playlists' && (
              <ArtistAlbumsMainLibraryPanel>
                <PlaylistList onToggleSection={toggleSection} />
              </ArtistAlbumsMainLibraryPanel>
            )}

        </ArtistAlbumsPlaylistSection>
          <ArtistView />
      </ArtistAlbumsMainSection>
    </div>
  );
}
export default ArtistAlbums;