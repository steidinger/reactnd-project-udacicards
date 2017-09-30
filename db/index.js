import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards:decks';

/**
 * Save all decks and their questions to the DB. Since the app uses
 * redux to update the state I decided to simply persist that part
 * of the state directly, i.e. an array of decks instead of the 
 * map like structure described in the project assignment. 
 * If the data really has to be stored in that structure, I could
 * transform the array into that structure on save and reverse the
 * transformation on load.
 * @param {*} decks 
 */
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
