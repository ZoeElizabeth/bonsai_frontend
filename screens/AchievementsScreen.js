import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import AchievementsView from '../pages/AchievementsView';

export default class AchievmentsScreen extends React.Component {
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
    return( <ScrollView style={styles.container}>
    
    <AchievementsView fetchActions={this.props.screenProps.fetchActions} />
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