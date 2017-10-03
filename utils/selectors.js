/*
 * I decided to keep the selector in its own file because in a larger app I expect to 
 * have more selectors and it doesn't really fit in any of the files.
 */

export function findDeckWithTitle({decks}, title) {
  return decks.find(deck => deck.title == title);
}