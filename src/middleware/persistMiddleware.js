// Middleware que persiste el estado en localStorage
let persistTimeout;

export const persistMiddleware = store => next => action => {
  // Ejecutar la acción normal PRIMERO
  const result = next(action);
  
  // DESPUÉS de ejecutar, guardar el estado en localStorage
  if (action.type === 'ADD_SONG' || action.type === 'REMOVE_SONG' || action.type === 'LOAD_SAVED_SONGS') {
    // Limpiar timeout anterior si existe (debounce)
    if (persistTimeout) {
      clearTimeout(persistTimeout);
    }
    
    // Esperar un poco para permitir múltiples acciones
    persistTimeout = setTimeout(() => {
      const state = store.getState();
      const savedSongs = state.modify_playlist;
      console.log('=== MIDDLEWARE: Sincronizando con localStorage ===');
      console.log('Acción:', action.type);
      console.log('Total canciones:', savedSongs ? savedSongs.length : 0);
      localStorage.setItem('userSavedSongs', JSON.stringify(savedSongs || []));
      console.log('✅ Guardado exitosamente');
    }, 100);
  }
  
  return result;
};
