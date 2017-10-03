import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import DeckListView from './views/DeckListView';
import NewDeckView from './views/NewDeckView';
import NewQuestionView from './views/NewQuestionView';
import DeckView from './views/DeckView';
import QuizView from './views/QuizView';
import { createStore } from './store';
import { loadDecks } from './utils/db';
import { decksLoaded } from './actions';
import { setupLocalNotification } from './utils/notifications';

/**
 * Use tabs to switch between deck list and 'new deck' form. Normally I'd
 * rather use a button to go from the list to the form. The screenshots
 * in the project assignment used tabs however and this way the app can
 * show how nested navigators work.
 */
const Tabs = TabNavigator({
  DeckList: {
    screen: DeckListView
  },
  NewDeck: {
    screen: NewDeckView
  }
});

const ScreenStack = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'UdaciCards'
    }
  },
  Deck: {
    screen: DeckView
  },
  AddQuestion: {
    screen: NewQuestionView
  },
  Quiz: {
    screen: QuizView
  }
});

export default class App extends React.Component {
  componentWillMount() {
    if (!this.store) {
      this.store = createStore();
      loadDecks().then(decks => this.store.dispatch(decksLoaded(decks)));
      setupLocalNotification();
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar />
          </View>
          <ScreenStack onNavigationStateChange={null} />
        </View>
      </Provider>
    );
  }
}
