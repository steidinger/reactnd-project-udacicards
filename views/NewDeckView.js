import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

export class NewDeckView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'New Deck'
  }

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange = (title) => {
    this.setState({ title });
  }

  handleSubmit = () => {
    const { title } = this.state;
    this.setState({ title: ''});
    this.props.onAddDeck(title);
  }

  render() {
    return (            
      <View style={{padding: 10}}>
        <Text style={styles.label}>What is the title of your new deck?</Text>
        <TextInput style={styles.input} placeholder="Deck Title" onChangeText={this.handleChange} />
        <Button onPress={this.handleSubmit} title="Submit" disabled={this.state.title.length === 0} />
      </View>);
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  onAddDeck: (title) => {
    // todo: save new deck
    dispatch(addDeck(title));
    navigation.navigate('DeckList');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);