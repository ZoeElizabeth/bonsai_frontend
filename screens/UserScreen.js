import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UserView from '../pages/UserView';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <UserView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});