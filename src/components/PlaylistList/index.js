import React from 'react';
import './styles.css';

const PlaylistList = ({ playlists = [], onToggleSection }) => {
  // cada playlist tiene un target para controlar qué sección abrir/toggle
  const fallback = [
    { id: 'p1', name: 'Canciones guardadas', target: 'library' },
    { id: 'p2', name: 'Busquedas recientes', target: 'search' },
    
  ];
  const list = playlists.length ? playlists : fallback;

  return (
    <div className="playlist_list">
      <h4>Playlists</h4>
      <ul>
        {list.map(p => (
          <li key={p.id} className="playlist_item">
            {/* al clicar el nombre togglea la sección indicada (library | search) */}
            <button type="button" className="playlist_name" onClick={() => onToggleSection && onToggleSection(p.target)}>{p.name}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistList;