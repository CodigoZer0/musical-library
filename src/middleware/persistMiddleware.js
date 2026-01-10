// Middleware que persiste el estado en localStorage
export const persistMiddleware = store => next => action => {
  // Ejecutar la acción normal PRIMERO
  const result = next(action);
  
  // DESPUÉS de ejecutar, guardar el estado en localStorage
  if (action.type === 'ADD_SONG' || action.type === 'REMOVE_SONG') {
    // Usar setTimeout para asegurar que el estado se ha actualizado
    setTimeout(() => {
      const state = store.getState();
      const savedSongs = state.modify_playlist;
      console.log('=== MIDDLEWARE: Sincronizando con localStorage ===');
      console.log('Acción:', action.type);
      console.log('Estado a guardar:', savedSongs);
      console.log('Total canciones:', savedSongs.length);
      localStorage.setItem('userSavedSongs', JSON.stringify(savedSongs));
      console.log('✅ Guardado exitosamente');
    }, 0);
  }
  
  return result;
};
