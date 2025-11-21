import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const PlaylistList = ({ playlists = [], onToggleSection }) => {
  // cada playlist tiene un target para controlar qué sección abrir/toggle
  const fallback = [
    { id: 'p1', name: 'Canciones guardadas', target: '/your_playlist' },
    { id: 'p2', name: 'Busquedas recientes', target: '/' },
    
  ];
  const list = playlists.length ? playlists : fallback;

  return (
    <div className="playlist_list">
      <h4>Playlists</h4>
      <ul>
        {list.map(p => (
          <li key={p.id} className="playlist_item">
            {/* al clicar el nombre togglea la sección indicada (library | search) */}
            <Link  className="playlist_name" to={p.target}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistList;