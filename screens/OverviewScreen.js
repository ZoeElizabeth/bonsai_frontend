import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import OverviewViewPie from '../pages/OverviewView';
import GraphChart from '../charts/Graph.js';

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <OverviewViewPie />
        <GraphChart  />
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