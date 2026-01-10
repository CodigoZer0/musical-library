import { PlaylistListContainer, PlaylistListItem, PlaylistListName, PlaylistListTitle, PlaylistListUl } from './styles';

const PlaylistList = ({ playlists = [], onToggleSection }) => {
  // cada playlist tiene un target para controlar qué sección abrir/toggle
  const fallback = [
    { id: 'p1', name: 'Canciones guardadas (0)', target: '/your_playlist' },
    { id: 'p2', name: 'Busquedas recientes', target: '/' },
    
  ];
  const list = playlists.length ? playlists : fallback;

  return (
    <PlaylistListContainer>
      <PlaylistListTitle>Playlists</PlaylistListTitle>
      <PlaylistListUl>
        {list.map(p => (
          <PlaylistListItem key={p.id} >
            {/* al clicar el nombre togglea la sección indicada (library | search) */}
            <PlaylistListName to={p.target}>{p.name}</PlaylistListName>
          </PlaylistListItem>
        ))}
      </PlaylistListUl>
    </PlaylistListContainer>
  )
}

export default PlaylistList;