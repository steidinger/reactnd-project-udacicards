import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function saveDecks(decks) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks),
      (error) => error ? reject(error) : resolve())
  });
}

export function loadDecks() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (error, decks) => {
      if (error) {
        reject(error);
      }
      else if (!decks) {
        resolve([]);
      }
      else {
        try {
          resolve(JSON.parse(decks));
        }
        catch (e) {
          reject(e);
        }
      }
    })
  })
}
