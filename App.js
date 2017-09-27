import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import DeckListView from './views/DeckListView';
import NewDeckView from './views/NewDeckView';
import reducer from './reducers';

const initialState = [{ title: 'React' }, { title: 'React Native' }];

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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, initialState, applyMiddleware(logger))}>
        <View style={{ flex: 1 }}>
          <AppStatusBar />
          <Tabs />
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
