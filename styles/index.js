import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24
  },
  cards: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4
  },
  buttonArea: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 20,
    flex: 1
  },
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
  quizPosition: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  container: {
    alignItems: 'center',
    marginBottom: 20
  },
  mainText: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4
  },
  quizTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  quizSummary: {
    fontSize: 18,
    marginBottom: 10
  },
  score: {
    fontSize: 18,
  },
});

export default styles;