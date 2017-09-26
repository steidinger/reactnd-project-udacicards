import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class NewDeckView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'New Deck'
  }

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = () => {
    // todo: save new deck
    this.setState({ title: ''});
    this.props.navigation.navigate('DeckList');
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput placeholder="Deck Title" onChange={this.handleChange} />
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>);
  }
}

export default NewDeckView;