import React from 'react';
import { ScrollView, StyleSheet , Text} from 'react-native';
import UserView from '../pages/UserView';

export default class UserScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Bonsai',
    headerStyle: {
      backgroundColor: '#AAD9A5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  });
  render() {

    return (
      <ScrollView style={styles.container}>
      <Text>{this.props.screenProps.message}</Text>
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