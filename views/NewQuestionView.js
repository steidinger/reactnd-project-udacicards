import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class NewQuestionView extends React.Component {
  static navigationOptions = {
    title: 'Add card'
  }

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      question: '',
      answer: ''
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.title != this.state.title) {
      this.setState({
        title: newProps.title,
        question: '',
        answer: ''
      })
    }
  }

  handleChange = (field, value) => this.setState({ [field]: value });

  handleSubmit = () => {
    const { title, question, answer } = this.state;
    this.props.onAddCard(title, { question, answer });
  }

  render() {
    const { question, answer } = this.state;
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter the question"
          onChangeText={text => this.handleChange('question', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the answer"
          onChangeText={text => this.handleChange('answer', text)}
        />
        <Button title="Submit" onPress={this.handleSubmit} disabled={question.length === 0 || answer.length === 0}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24
  }
});

const mapStateToProps = (state, { navigation }) => ({
  title: navigation.state.params.title
});


const mapDispatchToProps = (dispatch, { navigation }) => ({
  onAddCard: (title, question) => {
    dispatch(addCard(title, question));
    navigation.goBack();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView);