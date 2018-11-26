import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import AchievementsView from '../pages/AchievementsView';

export default class AchievmentsScreen extends React.Component {
  static navigationOptions = {
    title: 'Bonsai',
  };

  render() {
    return( <ScrollView style={styles.container}>
    
    <AchievementsView/>
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