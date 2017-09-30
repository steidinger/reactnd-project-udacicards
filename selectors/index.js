export function findDeckWithTitle({decks}, title) {
  return decks.find(deck => deck.title == title);
}