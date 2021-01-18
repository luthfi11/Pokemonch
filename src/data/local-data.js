import * as idb from 'idb';

const objectStore = 'pokemon';

const dbPromise = idb.openDB('pokemon-db', 1, {
  upgrade(database) {
    database.createObjectStore(objectStore, { keyPath: 'id' });
  },
});

const LocalData = {
  async getPokemonById(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(objectStore, id);
  },
  async getAllFavorited() {
    return (await dbPromise).getAll(objectStore);
  },
  async savePokemon(item) {
    if (!item.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(objectStore, item);
  },
  async deletePokemon(id) {
    return (await dbPromise).delete(objectStore, id);
  },
};

export default LocalData;
