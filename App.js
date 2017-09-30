import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import DeckListView from './views/DeckListView';
import NewDeckView from './views/NewDeckView';
import NewQuestionView from './views/NewQuestionView';
import DeckView from './views/DeckView';
import QuizView from './views/QuizView';
import {createStore} from './store';

const AppStatusBar = (props) => (
  <View style={{ height: Constants.statusBarHeight }}>
    <StatusBar {...props} />
  </View>
);

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
  render() {
    return (
      <Provider store={createStore()}>
        <View style={{ flex: 1 }}>
          <AppStatusBar />
          <ScreenStack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
