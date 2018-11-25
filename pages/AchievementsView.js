import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Achieved from '../modal/Achieved';


export default class AchievmentsView extends React.Component {
  render() {
    return ( 
      <View>
        <Achieved />
      </View>
    );

  }
};

const styles = StyleSheet.create({

});

